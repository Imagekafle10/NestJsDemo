import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { UsersService } from '../../services/users/users.service';
import { UserNotFoundException } from '../../exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from '../../filters/HttpException.filter';
import { CreateUserDto } from '../../dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  //Injecting Token User_Service
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User Not Found!', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('/id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    else {
      throw new UserNotFoundException();
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}

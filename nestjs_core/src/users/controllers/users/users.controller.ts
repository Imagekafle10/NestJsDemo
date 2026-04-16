import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  //Injecting Token User_Service
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
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
}

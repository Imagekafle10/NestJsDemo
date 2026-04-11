import { UsersService } from './../../services/users/users.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { title } from 'process';
import { CreateUserDto } from '../../dtos/CreateUser.dtos';
import { Validate } from 'class-validator';
import { ValidateCreateUserPipe } from '../../pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from '../../guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  //Query Params
  @Get('query')
  getUsersByQuery(@Query('sortBy', ParseBoolPipe) sortBy: boolean) {
    return [{ username: 'Image', email: 'image@gmail.com', sortBy }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Image',
        email: 'image@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());

    return this.userService.createUsers(userData);
  }

  //Route Params
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.getUsersById(id);
    if (!user)
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
  }
}

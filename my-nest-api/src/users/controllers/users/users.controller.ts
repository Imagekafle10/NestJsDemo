import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { title } from 'process';
import { CreateUserDto } from '../../dtos/CreateUser.dtos';
import { Validate } from 'class-validator';

@Controller('users')
export class UsersController {
  //Query Params
  @Get()
  getUsersByQuery(@Query('sortBy', ParseBoolPipe) sortBy: boolean) {
    return [{ username: 'Image', email: 'image@gmail.com', sortBy }];
  }

  @Get()
  getUsers() {
    return [{ username: 'Image', email: 'image@gmail.com' }];
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
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.username);
    return 'Created';
  }

  //Route Params
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}

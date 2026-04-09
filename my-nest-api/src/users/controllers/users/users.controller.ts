import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { title } from 'process';
import { CreateUserDto } from '../../dtos/CreateUser.dtos';

@Controller('users')
export class UsersController {
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

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.username);
    return 'Created';
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id);
    return { id, postId };
  }
}

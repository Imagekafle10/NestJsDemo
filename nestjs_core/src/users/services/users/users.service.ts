import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'image', password: 'image123' },
    { id: 2, username: 'danny', password: 'danny123' },
    { id: 3, username: 'derek', password: 'derek123' },
    { id: 4, username: 'samantha', password: 'samantha123' },
  ];

  getUsers() {
    //Plain to Class
    // return this.users.map((user) => plainToClass(SerializedUser, user));
    return this.users.map((user) => new SerializedUser(user));
  }
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../controllers/users/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Image', email: 'image@gmail.com' },
    { username: 'ram', email: 'ram@gmail.com' },
    { username: 'sita', email: 'sita@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUsers(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
  }

  getUsersById(id: number) {
    // return { id, name: 'test', email: 'test@gmail.com' };
    return null;  
  }
}

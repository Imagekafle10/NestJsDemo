import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'image@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'ram@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'sita@gmail.com',
      createdAt: new Date(),
    },
  ];
  // findCustomers() {
  //   return {
  //     id: 1,
  //     email: 'image@gmail.com',
  //     createdAt: new Date(),
  //   };
  // }

  findCustomersById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}

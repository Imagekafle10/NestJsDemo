import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';
import { Customer } from '../../../types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'image@gmail.com',
      name: 'image image',
    },
    {
      id: 2,
      email: 'ram@gmail.com',
      name: 'ram ram',
    },
    {
      id: 3,
      email: 'sita@gmail.com',
      name: 'shyam shyam',
    },
  ];
  findCustomers() {
    return {
      id: 1,
      email: 'image@gmail.com',
      createdAt: new Date(),
    };
  }

  findCustomersById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  CreateCustomer(customerDto: CreateCustomerDto) {
    return this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}

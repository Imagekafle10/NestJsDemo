import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  Res,
} from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import type { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(typeof id);

    const customer = this.customersService.findCustomersById(id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(400).json({ message: 'Customer not Found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomersById(id);
    if (customer) return customer;
    else throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);
  }
}

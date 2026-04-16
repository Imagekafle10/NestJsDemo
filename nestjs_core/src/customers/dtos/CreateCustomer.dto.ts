import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email!: string;

  @IsNumberString()
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  name!: string;

  //Validation for Nested Object
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address!: CreateAddressDto;
}

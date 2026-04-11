import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dtos';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUser');
    console.log('Value', value);
    console.log('MetaData', metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if (isNaN(parseAgeToInt))
      throw new HttpException(
        'Invalid Data type for age',
        HttpStatus.BAD_REQUEST,
      );
    console.log(`${parseAgeToInt} is a number.Returning...`);

    return { ...value, age: parseAgeToInt };
  }
}

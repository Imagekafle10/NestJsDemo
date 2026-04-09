import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string | undefined;

  @IsEmail()
  @IsNotEmpty()
  email: string | undefined;
}

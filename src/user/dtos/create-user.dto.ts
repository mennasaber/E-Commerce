import { ApiProperty } from '@nestjs/swagger';
import { isString, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @ApiProperty()
  Firstname: string;
  @IsString()
  @ApiProperty()
  Lastname: string;
  @IsString()
  @ApiProperty()
  ImagePath: string;
}

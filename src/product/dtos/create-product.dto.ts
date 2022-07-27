import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @ApiProperty()
  Name_EN: string;
  @IsString()
  @ApiProperty()
  Name_AR: string;
  @IsString()
  @ApiProperty()
  Description_EN: string;
  @IsString()
  @ApiProperty()
  Description_AR: string;
  @IsNumber()
  @ApiProperty()
  Price: number;
  @IsBoolean()
  @ApiProperty()
  HasDiscount: boolean;
  @IsOptional()
  @ApiProperty()
  Discount: number;
}

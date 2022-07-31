import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from 'src/product/dtos/create-product.dto';
import { UpdateProductDTO } from 'src/product/dtos/update-product.dto';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-dto';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async GetAll(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).json(await this.userService.GetAllUsers());
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Get(':id')
  @ApiParam({ name: 'id' })
  async GetById(@Res() res: Response, @Param('id') id: string) {
    try {
      res.status(HttpStatus.OK).json(await this.userService.GetUserById(id));
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json(error);
    }
  }
  @Post()
  @ApiBody({ type: CreateUserDTO })
  async Create(@Res() res: Response, @Body() body: CreateUserDTO) {
    try {
      res
        .status(HttpStatus.CREATED)
        .json(await this.userService.CreateUser(body));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateUserDTO })
  async Update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ) {
    try {
      res
        .status(HttpStatus.OK)
        .json(await this.userService.UpdateUser(id, body));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Delete(':id')
  @ApiParam({ name: 'id' })
  async Delete(@Res() res: Response, @Param('id') id: string) {
    try {
      res.status(HttpStatus.OK).json(await this.userService.DeleteUserById(id));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}

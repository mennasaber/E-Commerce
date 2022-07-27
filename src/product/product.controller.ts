import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { ProductService } from './product.service';
@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async GetAll(@Res() res: Response) {
    try {
      res
        .status(HttpStatus.OK)
        .json(await this.productService.GetAllProducts());
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Get(':id')
  @ApiParam({ name: 'id' })
  async GetById(@Res() res: Response, @Param('id') id: string) {
    try {
      res
        .status(HttpStatus.OK)
        .json(await this.productService.GetProductById(id));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Post()
  @ApiBody({ type: CreateProductDTO })
  async Create(@Res() res: Response, @Body() body: CreateProductDTO) {
    try {
      res
        .status(HttpStatus.CREATED)
        .json(await this.productService.CreateProduct(body));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateProductDTO })
  async Update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: UpdateProductDTO,
  ) {
    try {
      res
        .status(HttpStatus.OK)
        .json(await this.productService.UpdateProduct(id, body));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Delete(':id')
  @ApiParam({ name: 'id' })
  async Delete(@Res() res: Response, @Param('id') id: string) {
    try {
      res
        .status(HttpStatus.OK)
        .json(await this.productService.DeleteProductById(id));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}

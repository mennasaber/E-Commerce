import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productEntity: Model<ProductDocument>,
  ) {}
  async CreateProduct(product: CreateProductDTO) {
    let tempProduct = { ...product, CreatedAt: new Date() };
    const createdProduct = new this.productEntity(tempProduct);
    createdProduct.CreatedAt = new Date();
    return createdProduct.save();
  }
  async UpdateProduct(id: string, product: UpdateProductDTO) {
    let tempProduct = { ...product, ModifiedAt: new Date() };
    return this.productEntity.findByIdAndUpdate(id, tempProduct, { new: true });
  }
  async GetAllProducts() {
    return this.productEntity.find().exec();
  }
  async GetProductById(id: string) {
    return this.productEntity.findById(id).exec();
  }
  async DeleteProductById(id: string) {
    let product = await this.productEntity.findById(id).exec();
    product.IsDeleted = true;
    product.DeletedAt = new Date();
    return this.productEntity.updateOne({ product });
  }
}

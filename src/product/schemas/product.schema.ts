import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;
@Schema()
export class Product {
  @Prop()
  Name_EN: string;
  @Prop()
  Name_AR: string;
  @Prop()
  Description_EN: string;
  @Prop()
  Description_AR: string;
  @Prop()
  Price: number;
  @Prop()
  HasDiscount: boolean;
  @Prop()
  Discount: number;
  @Prop()
  CreatedAt: Date;
  @Prop()
  ModifiedAt: Date;
  @Prop()
  IsDeleted: boolean;
  @Prop()
  DeletedAt: Date;
}
export const ProductSchema = SchemaFactory.createForClass(Product);

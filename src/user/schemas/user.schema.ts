import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  Firstname: string;
  @Prop()
  Lastname: string;
  @Prop()
  ImagePath: string;
  @Prop()
  IsDeleted: boolean;
  @Prop()
  DeletedAt: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);

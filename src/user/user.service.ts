import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userEntity: Model<UserDocument>,
  ) {}
  async CreateUser(user: CreateUserDTO) {
    const createUser = new this.userEntity(user);
    return createUser.save();
  }
  async UpdateUser(id: string, user: UpdateUserDTO) {
    return this.userEntity.findByIdAndUpdate(id, user, { new: true });
  }
  async GetAllUsers() {
    return this.userEntity.find().exec();
  }
  async GetUserById(id: string) {
    return this.userEntity.findById(id).exec();
  }
  async DeleteUserById(id: string) {
    let user = await this.userEntity.findById(id).exec();
    user.IsDeleted = true;
    user.DeletedAt = new Date();
    return this.userEntity.updateOne({ user });
  }
}

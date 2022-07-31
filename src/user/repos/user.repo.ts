import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/Base.service';
import { User, UserDocument } from '../schemas/user.schema';
@Injectable()
export class UserRepo extends BaseService<User> {
  constructor(@InjectModel(User.name) private userEntity: Model<UserDocument>) {
    super(userEntity);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/Base.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-dto';
import { UserRepo } from './repos/user.repo';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepo) {}
  async CreateUser(user: CreateUserDTO) {
    return this.userRepo.Create(user as User);
  }
  async UpdateUser(id: string, user: UpdateUserDTO) {
    return this.userRepo.Update(id, user as User);
  }
  async GetAllUsers() {
    return this.userRepo.ReadAll();
  }
  async GetUserById(id: string) {
    return this.userRepo.Read(id);
  }
  async DeleteUserById(id: string) {
    return this.userRepo.Delete(id);
  }
}

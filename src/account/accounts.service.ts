import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountEntity: Model<AccountDocument>,
  ) {}
  async findUser(username: string): Promise<Account | undefined> {
    return this.accountEntity.findOne({ Username: username }).exec();
  }
}

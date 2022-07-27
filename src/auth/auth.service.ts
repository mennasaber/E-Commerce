import { Injectable } from '@nestjs/common';
import { AccountsService } from '../account/accounts.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.accountsService.findUser(username);
    if (user && user.Password === pass) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    let payload = { username: user.name, sub: user._id };
    return { access_token: this.jwtService.sign(payload) };
  }
}

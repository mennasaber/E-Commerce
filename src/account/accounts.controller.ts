import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
@Controller('accounts')
export class AccountsController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    return request.body.username;
  }
}

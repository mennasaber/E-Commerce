import { Controller, Post, UseGuards, Get, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
@Controller('account')
@ApiTags('Account')
export class AccountController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    return request.body.username;
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './account/accounts.module';

@Module({
  imports: [
    AuthModule,
    AccountsModule,
    MongooseModule.forRoot('mongodb://localhost/e-commerce'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

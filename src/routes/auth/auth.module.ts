import { Module } from '@nestjs/common';
import { AuthModule } from 'src/services/auth/auth.module';
import { AuthService } from 'src/services/auth/auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
})
export class AuthRouteModule {}

import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtAuthGuard } from 'src/services/auth/jwt-auth-guard';
import { LocalAuthGuard } from 'src/services/auth/local-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  get() {
    return 'ok';
  }
  @Get('login')
  getlogin() {
    return 'ok login';
  }
}

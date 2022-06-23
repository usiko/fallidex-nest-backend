import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { JwtAuthGuard } from 'src/services/auth/jwt-auth-guard';
import { LocalAuthGuard } from 'src/services/auth/local-auth-guard';
import { CtrlRoute } from '../class/controller.class';
import { SignificationService } from './signification.service';

@Controller(pathEnum.SIGNIFICATION)
export class SignificationController extends CtrlRoute<any> {
  constructor(protected dataService: SignificationService) {
    super();
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  get() {
    return super.get();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getItem(@Param() params) {
    return super.getItem(params);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  Post(@Param() params) {
    super.post(params);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  Put(@Param() params) {
    super.put(params);
  }
}

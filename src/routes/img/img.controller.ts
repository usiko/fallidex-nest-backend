import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/services/auth/local-auth-guard';
import { CtrlRoute } from '../class/controller.class';
import { ImgService } from './img.service';

@Controller('img')
export class ImgController extends CtrlRoute<any> {
  constructor(protected dataService: ImgService) {
    super();
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  get() {
    return super.get();
  }

  @UseGuards(LocalAuthGuard)
  @Get(':id')
  getItem(@Param() params) {
    return super.getItem(params);
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  Post(@Param() params) {
    super.post(params);
  }

  @UseGuards(LocalAuthGuard)
  @Put()
  Put(@Param() params) {
    super.put(params);
  }
}

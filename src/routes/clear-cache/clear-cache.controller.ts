import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { CtrlRoute } from '../class/controller.class';
import { CacheClearService } from './clear-cache.service';

@Controller(pathEnum.CLEARCACHE)
export class CacheClearController extends CtrlRoute<any> {
  constructor(protected dataService: CacheClearService) {
    super();
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  get() {
    return super.get();
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  getItem(@Param() params) {
    return super.getItem(params);
  }

  //@UseGuards(JwtAuthGuard)
  @Post()
  Post(@Param() params) {
    super.post(params);
  }

  //@UseGuards(JwtAuthGuard)
  @Put()
  Put(@Param() params) {
    super.put(params);
  }
}

import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CtrlRoute } from '../class/controller.class';
import { CirculaireService } from './auth.service';

@Controller('circulaire')
export class CirculaireController extends CtrlRoute<any> {
  constructor(protected dataService: CirculaireService) {
    super();
  }

  @Get()
  get() {
    return super.get();
  }

  @Get(':id')
  getItem(@Param() params) {
    return super.getItem(params);
  }

  @Post()
  Post(@Param() params) {
    super.post(params);
  }
  @Put()
  Put(@Param() params) {
    super.put(params);
  }
}

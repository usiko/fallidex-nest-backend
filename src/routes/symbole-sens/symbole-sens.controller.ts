import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { CtrlRoute } from '../class/controller.class';
import { SymboleSensService } from './symbole-sens.service';

@Controller(pathEnum.SYMBOLESENS)
export class SymboleSensController extends CtrlRoute<any> {
  constructor(protected dataService: SymboleSensService) {
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

import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { LocalAuthGuard } from 'src/services/auth/local-auth-guard';
import { CtrlRoute } from '../class/controller.class';
import { SymboleAccessoriesService } from './symbole-accessories.service';
@Controller(pathEnum.SYMBOLEACCESSORIES)
export class SymboleAcessoriesController extends CtrlRoute<any> {
  constructor(protected dataService: SymboleAccessoriesService) {
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

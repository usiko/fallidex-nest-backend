import { Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/services/auth/local-auth-guard';
import { CtrlRoute } from '../class/controller.class';
import { CirculaireService } from './circulaire.service';

@Controller('circulaire')
export class CirculaireController extends CtrlRoute<any> {
  constructor(protected dataService: CirculaireService) {
    super();
  }
  @UseGuards(AuthGuard('local'))
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

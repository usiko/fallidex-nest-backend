import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GlobalMockService } from 'src/global/global-mock.service';
import { pathEnum } from 'src/models/enum';
import { CtrlRoute } from '../class/controller.class';
import { DataLinkService } from './data-link.service';

@Controller(pathEnum.LINK)
export class DataLinkController extends CtrlRoute<any> {
  constructor(protected dataService: DataLinkService) {
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

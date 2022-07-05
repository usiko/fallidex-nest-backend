import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { SymbolAccessorieMongoService } from 'src/mongo/services/symbol-accessorie.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class SymboleAccessoriesService extends Rest<any> {
  database = pathEnum.SYMBOLEACCESSORIES;
  constructor(protected dataBaseService: SymbolAccessorieMongoService) {
    super();
  }
}

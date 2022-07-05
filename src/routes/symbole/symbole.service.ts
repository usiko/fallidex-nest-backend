import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { SymbolMongoService } from 'src/mongo/services/symbols.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class SymboleService extends Rest<any> {
  database = pathEnum.SYMBOLE;
  constructor(protected dataBaseService: SymbolMongoService) {
    super();
  }
}

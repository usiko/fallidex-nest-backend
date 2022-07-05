import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { SymbolDirectionMongoService } from 'src/mongo/services/symbol-direction.mongo.service';
import { SymbolMongoService } from 'src/mongo/services/symbols.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class SymboleSensService extends Rest<any> {
  database = pathEnum.SYMBOLESENS;
  constructor(protected dataBaseService: SymbolDirectionMongoService) {
    super();
  }
}

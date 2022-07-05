import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { ItemIndexMongoService } from 'src/mongo/services/item-index..mongo.service';
import { SymbolMongoService } from 'src/mongo/services/symbols.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class ItemMetadataService extends Rest<any> {
  database = pathEnum.SYMBOLE;
  constructor(protected dataBaseService: ItemIndexMongoService) {
    super();
  }
}

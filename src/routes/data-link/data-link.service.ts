import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { RelationMongoService } from 'src/mongo/services/relation.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class DataLinkService extends Rest<any> {
  database = pathEnum.LINK;
  constructor(protected dataBaseService: RelationMongoService) {
    super();
  }
}

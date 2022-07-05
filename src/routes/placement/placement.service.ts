import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { EarnMongoService } from 'src/mongo/services/earn.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class PlacementService extends Rest<any> {
  database = pathEnum.PLACEMENT;
  constructor(protected dataBaseService: EarnMongoService) {
    super();
  }
}

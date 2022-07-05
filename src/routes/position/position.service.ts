import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { PositionMongoService } from 'src/mongo/services/position.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class PositionService extends Rest<any> {
  database = pathEnum.POSITION;
  constructor(protected dataBaseService: PositionMongoService) {
    super();
  }
}

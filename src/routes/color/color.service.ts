import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { ColorMongoService } from 'src/mongo/services/Color.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class ColorService extends Rest<any> {
  database = pathEnum.COLOR;
  constructor(protected dataBaseService: ColorMongoService) {
    super();
  }
}

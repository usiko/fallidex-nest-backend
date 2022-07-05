import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { CircularColorMongoService } from 'src/mongo/services/circular-color.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class CirculaireColorLinkService extends Rest<any> {
  database = pathEnum.CIRCULAIRE_COLOR;
  constructor(protected dataBaseService: CircularColorMongoService) {
    super();
  }
}

import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { CircularMongoService } from 'src/mongo/services/circular.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class CirculaireService extends Rest<any> {
  database = pathEnum.CIRCULAIRE;
  constructor(protected dataBaseService: CircularMongoService) {
    super();
  }
}

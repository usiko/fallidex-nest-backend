import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { MeaningMongoService } from 'src/mongo/services/meaning.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class SignificationService extends Rest<any> {
  database = pathEnum.SIGNIFICATION;
  constructor(protected dataBaseService: MeaningMongoService) {
    super();
  }
}

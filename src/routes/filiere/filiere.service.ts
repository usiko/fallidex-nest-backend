import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { StudieMongoService } from 'src/mongo/services/studies.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class FiliereService extends Rest<any> {
  database = pathEnum.FILIERE;
  constructor(protected dataBaseService: StudieMongoService) {
    super();
  }
}

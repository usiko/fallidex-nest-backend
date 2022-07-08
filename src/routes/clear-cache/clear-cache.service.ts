import { Injectable } from '@nestjs/common';
import { GlobalCacheService } from 'src/global/global-cache.service';
import { pathEnum } from 'src/models/enum';
import { ColorMongoService } from 'src/mongo/services/color.mongo.service';
import { Rest } from '../class/rest.class';

@Injectable()
export class CacheClearService extends Rest<any> {
  database = pathEnum.CLEARCACHE;
  constructor() {
    super();
  }

  findAll(): Promise<any[]> {
    GlobalCacheService.clearCache();
    return Promise.resolve([]);
  }
}

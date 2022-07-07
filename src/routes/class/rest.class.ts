import { GlobalCacheService } from 'src/global/global-cache.service';
import { GlobalMockService } from 'src/global/global-mock.service';
import { pathEnum } from 'src/models/enum';
import { BaseSchema } from 'src/mongo/schemas/base.shema';
import { BaseMongoService } from 'src/mongo/services/base.mongo.service';
import { MongoDBService } from './mongo-db.class';

/**
 * use mongo db service
 */
export class Rest<T extends BaseSchema> {
  // were we go get data;
  protected database: pathEnum;

  protected dataBaseService: BaseMongoService<T>;

  async findAll(): Promise<T[]> {
    const cache = GlobalCacheService.getCacheList(this.database);
    if (cache && cache.length > 0) {
      console.log('from cache');
      return cache as T[];
    } else {
      return this.loadList();
    }
  }

  getItem(id: string): any {
    const cacheItems = GlobalCacheService.getCacheItems(this.database);
    if (cacheItems && cacheItems.has(id)) {
      console.log('from cache');
      return cacheItems.get(id);
    } else {
      return this.loadItem(id);
    }
  }

  modify(): any {}

  create(): any {}

  private async loadList(): Promise<T[]> {
    const cache = GlobalCacheService.getCacheList(this.database);
    if (this.dataBaseService) {
      const data = await this.dataBaseService.findAll();
      cache.length = 0;
      cache.push(...data);
      return data;
    } else {
      return Promise.resolve(
        GlobalMockService.getFromDatabaseName(this.database) as any,
      );
    }
  }
  private async loadItem(id: string): Promise<T> {
    const cacheItems = GlobalCacheService.getCacheItems(this.database);
    if (this.dataBaseService) {
      const data = await this.dataBaseService.findById(id);
      if (data) {
        cacheItems.set(id, data);
      }
      return data;
    } else {
      return Promise.resolve(
        GlobalMockService.getFromDatabaseName(this.database) as any,
      );
    }
  }
}

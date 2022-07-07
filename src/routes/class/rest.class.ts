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

  private cacheList: T[];

  private cacheItem = new Map<string, T>();

  async findAll(): Promise<T[]> {
    if (this.cacheList && this.cacheList.length > 0) {
      return this.cacheList;
    } else {
      return this.loadList();
    }
  }

  getItem(id: string): any {
    if (this.cacheItem && this.cacheItem.has(id)) {
      return this.cacheItem.get(id);
    } else {
      return this.loadItem(id);
    }
    return GlobalMockService.getItemFromDatabaseName(this.database, id);
  }

  modify(): any {}

  create(): any {}

  private async loadList(): Promise<T[]> {
    if (this.dataBaseService) {
      const data = await this.dataBaseService.findAll();
      this.cacheList = data;
      return data;
    } else {
      return Promise.resolve(
        GlobalMockService.getFromDatabaseName(this.database) as any,
      );
    }
  }
  private async loadItem(id: string): Promise<T> {
    if (this.dataBaseService) {
      const data = await this.dataBaseService.findById(id);
      if (data) {
        this.cacheItem.set(id, data);
      }
      return data;
    } else {
      return Promise.resolve(
        GlobalMockService.getFromDatabaseName(this.database) as any,
      );
    }
  }
}

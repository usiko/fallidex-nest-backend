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

  async findAll(): Promise<T[]> {
    if (this.cacheList) {
      return this.cacheList;
    } else {
      return this.loadList();
    }
  }

  getItem(id: string): any {
    return GlobalMockService.getItemFromDatabaseName(this.database, id);
  }

  modify(): any {}

  create(): any {}

  private async loadList(): Promise<T[]> {
    const data = await this.dataBaseService.findAll();
    this.cacheList = data;
    return data;
  }
}

import { json } from 'express';
import { BaseSchema } from 'src/mongo/schemas/base.shema';
import { BaseMongoService } from 'src/mongo/services/base.mongo.service';
import { Rest } from './rest.class';

export class CtrlRoute<T extends BaseSchema> {
  // were we go get data;
  protected dataService: Rest<T>;

  async get(): Promise<string> {
    const data = await this.dataService.findAll();
    return JSON.stringify(data);
  }

  getItem(params): T {
    return this.dataService.getItem(params.id);
  }

  put(params): any {
    return this.dataService.modify();
  }

  post(params): any {
    return this.dataService.create();
  }
}

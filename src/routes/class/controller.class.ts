import { json } from 'express';
import { BaseMongoService } from 'src/mongo/services/base.mongo.service';
import { Rest } from './rest.class';

export class CtrlRoute<T> {
  // were we go get data;
  protected dataService: Rest<T>;
  protected dataBaseService: BaseMongoService<any>;

  async get(): Promise<string> {
    const data = await this.dataBaseService.findAll();
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

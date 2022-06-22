import { json } from 'express';
import { Rest } from './rest.class';

export class CtrlRoute<T> {
  // were we go get data;
  protected dataService: Rest<T>;

  get(): string {
    return JSON.stringify(this.dataService.findAll());
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

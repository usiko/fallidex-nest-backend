import { Document, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseSchema } from '../schemas/base.shema';

@Injectable()
export class BaseMongoService<T extends BaseSchema> {
  protected model: Model<any>;

  async findAll(): Promise<T[]> {
    console.log('findall');
    this.model
      .find()
      .exec()
      .then((data) => {
        console.log(data);
      });
    return this.model.find().exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Circular, CircularDocument } from '../schemas/circular.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class CircularMongoService extends BaseMongoService<Circular> {
  constructor(
    @InjectModel(Circular.name) protected model: Model<CircularDocument>,
  ) {
    super();
  }
}

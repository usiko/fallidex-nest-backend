import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CircularColor,
  CircularColorDocument,
} from '../schemas/circular-color.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class CircularColorMongoService extends BaseMongoService<CircularColor> {
  constructor(
    @InjectModel(CircularColor.name)
    protected model: Model<CircularColorDocument>,
  ) {
    super();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Position, PositionDocument } from '../schemas/position.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class PositionMongoService extends BaseMongoService<Position> {
  constructor(
    @InjectModel(Position.name) protected model: Model<PositionDocument>,
  ) {
    super();
  }
}

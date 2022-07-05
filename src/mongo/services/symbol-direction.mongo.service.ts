import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SymbolDirection,
  SymbolDirectionDocument,
} from '../schemas/symbol-direction.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class SymbolDirectionMongoService extends BaseMongoService<SymbolDirection> {
  constructor(
    @InjectModel(SymbolDirection.name)
    protected model: Model<SymbolDirectionDocument>,
  ) {
    super();
  }
}

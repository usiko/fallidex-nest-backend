import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SymbolAccessorie,
  SymbolAccessorieDocument,
} from '../schemas/symbol-accessorie.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class SymbolAccessorieMongoService extends BaseMongoService<SymbolAccessorie> {
  constructor(
    @InjectModel(SymbolAccessorie.name)
    protected model: Model<SymbolAccessorieDocument>,
  ) {
    super();
  }
}

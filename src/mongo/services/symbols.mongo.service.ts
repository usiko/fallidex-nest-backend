import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMongoService } from './base.mongo.service';
import { Symbol, SymbolDocument } from '../schemas/symbol.schema';

@Injectable()
export class SymbolMongoService extends BaseMongoService<Symbol> {
  constructor(
    @InjectModel(Symbol.name) protected model: Model<SymbolDocument>,
  ) {
    super();
  }
}

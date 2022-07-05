import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemIndex, ItemIndexDocument } from '../schemas/item-index.schema';

import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class ItemIndexMongoService extends BaseMongoService<ItemIndex> {
  constructor(
    @InjectModel(ItemIndex.name) protected model: Model<ItemIndexDocument>,
  ) {
    super();
  }
}

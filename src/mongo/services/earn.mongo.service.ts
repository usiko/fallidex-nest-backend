import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from '../schemas/color.schema';
import { Earn, EarnDocument } from '../schemas/earn.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class EarnMongoService extends BaseMongoService<Earn> {
  constructor(@InjectModel(Earn.name) protected model: Model<EarnDocument>) {
    super();
  }
}

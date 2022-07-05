import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color, ColorDocument } from '../schemas/color.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class ColorMongoService extends BaseMongoService<Color> {
  constructor(@InjectModel(Color.name) protected model: Model<ColorDocument>) {
    super();
  }
}

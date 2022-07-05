import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meaning, MeaningDocument } from '../schemas/meaning.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class MeaningMongoService extends BaseMongoService<Meaning> {
  constructor(
    @InjectModel(Meaning.name) protected model: Model<MeaningDocument>,
  ) {
    super();
  }
}

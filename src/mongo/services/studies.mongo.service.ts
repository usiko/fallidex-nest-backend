import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Studie, StudieDocument } from '../schemas/studies.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class StudieMongoService extends BaseMongoService<Studie> {
  constructor(
    @InjectModel(Studie.name) protected model: Model<StudieDocument>,
  ) {
    super();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Relation, RelationDocument } from '../schemas/relation.schema';
import { BaseMongoService } from './base.mongo.service';

@Injectable()
export class RelationMongoService extends BaseMongoService<Relation> {
  constructor(
    @InjectModel(Relation.name)
    protected model: Model<RelationDocument>,
  ) {
    super();
  }
  async findAll(): Promise<Relation[]> {
    console.log('findall');

    return this.model
      .find(undefined, ['_id', 'id', 'name', 'annee', 'modificationDate'])
      .exec();
  }
}

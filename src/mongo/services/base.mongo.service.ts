import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class BaseMongoService<T extends BaseSchema> {
    protected model: Model<CatDocument>;
	

	async findAll(): Promise<T[]> {
		return this.model.find().exec();
	}
}

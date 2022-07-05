import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class SymbolMongoService extends BaseMongoService {
	constructor(@InjectModel(Symbol.name) protected model: Model<CatDocument>) {}
}

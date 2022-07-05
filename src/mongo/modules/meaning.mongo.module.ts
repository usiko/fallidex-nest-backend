import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Meaning, MeaningSchema } from '../schemas/meaning.schema';
import { MeaningMongoService } from '../services/meaning.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meaning.name, schema: MeaningSchema }]),
  ],

  providers: [MeaningMongoService],
  exports: [MeaningMongoService],
})
export class MeaningMongoModule {}

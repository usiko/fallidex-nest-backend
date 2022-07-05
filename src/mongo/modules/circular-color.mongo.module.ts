import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CircularColor,
  CircularColorSchema,
} from '../schemas/circular-color.schema';
import { CircularColorMongoService } from '../services/circular-color.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CircularColor.name, schema: CircularColorSchema },
    ]),
  ],

  providers: [CircularColorMongoService],
  exports: [CircularColorMongoService],
})
export class CircularColorMongoModule {}

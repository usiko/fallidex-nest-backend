import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Circular, CircularSchema } from '../schemas/circular.schema';
import { CircularMongoService } from '../services/circular.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Circular.name, schema: CircularSchema },
    ]),
  ],

  providers: [CircularMongoService],
  exports: [CircularMongoService],
})
export class CircularMongoModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Circular, CircularSchema } from '../schemas/circular.schema';
import { Earn, EarnSchema } from '../schemas/earn.schema';
import { CircularMongoService } from '../services/circular.mongo.service';
import { EarnMongoService } from '../services/earn.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Earn.name, schema: EarnSchema }]),
  ],

  providers: [EarnMongoService],
})
export class EarnMongoModule {}

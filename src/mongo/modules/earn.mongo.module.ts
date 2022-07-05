import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Earn, EarnSchema } from '../schemas/earn.schema';
import { EarnMongoService } from '../services/earn.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Earn.name, schema: EarnSchema }]),
  ],

  providers: [EarnMongoService],
  exports: [EarnMongoService],
})
export class EarnMongoModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Position, PositionSchema } from '../schemas/position.schema';
import { PositionMongoService } from '../services/position.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Position.name, schema: PositionSchema },
    ]),
  ],

  providers: [PositionMongoService],
})
export class PositionMongoModule {}

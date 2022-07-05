import { Module } from '@nestjs/common';
import { PositionMongoModule } from 'src/mongo/modules/position.mongo.module';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';

@Module({
  imports: [PositionMongoModule],
  controllers: [PositionController],
  providers: [PositionService],
})
export class PositionModule {}

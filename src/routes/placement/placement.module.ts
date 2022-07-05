import { Module } from '@nestjs/common';
import { EarnMongoModule } from 'src/mongo/modules/earn.mongo.module';
import { PlacementController } from './placement.controller';
import { PlacementService } from './placement.service';

@Module({
  imports: [EarnMongoModule],
  controllers: [PlacementController],
  providers: [PlacementService],
})
export class PlacementModule {}

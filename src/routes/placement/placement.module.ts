import { Module } from '@nestjs/common';
import { PlacementController } from './placement.controller';
import { PlacementService } from './placement.service';

@Module({
	imports: [],
	controllers: [PlacementController],
	providers: [PlacementService],
})
export class PlacementModule { }

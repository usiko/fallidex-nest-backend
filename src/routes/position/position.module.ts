import { Module } from '@nestjs/common';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';

@Module({
	imports: [],
	controllers: [PositionController],
	providers: [PositionService],
})
export class PositionModule { }

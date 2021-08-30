import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';

@Module({
	imports: [],
	controllers: [ColorController],
	providers: [ColorService],
})
export class ColorModule { }

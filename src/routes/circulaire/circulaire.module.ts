import { Module } from '@nestjs/common';
import { CirculaireController } from './circulaire.controller';
import { CirculaireService } from './circulaire.service';

@Module({
	imports: [],
	controllers: [CirculaireController],
	providers: [CirculaireService],
})
export class CirculaireModule { }

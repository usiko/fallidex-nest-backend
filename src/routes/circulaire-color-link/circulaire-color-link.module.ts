import { Module } from '@nestjs/common';
import { CirculaireColorLinkController } from './circulaire-color-link.controller';
import { CirculaireColorLinkService } from './circulaire-color-link.service';

@Module({
	imports: [],
	controllers: [CirculaireColorLinkController],
	providers: [CirculaireColorLinkService],
})
export class CirculaireColorLinkModule { }

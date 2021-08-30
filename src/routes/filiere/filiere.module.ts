import { Module } from '@nestjs/common';
import { FiliereController } from './filiere.controller';
import { FiliereService } from './filiere.service';

@Module({
	imports: [],
	controllers: [FiliereController],
	providers: [FiliereService],
})
export class FiliereModule { }

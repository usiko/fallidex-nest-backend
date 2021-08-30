import { Module } from '@nestjs/common';
import { SymboleController } from './symbole.controller';
import { SymboleService } from './symbole.service';

@Module({
	imports: [],
	controllers: [SymboleController],
	providers: [SymboleService],
})
export class SymboleModule { }

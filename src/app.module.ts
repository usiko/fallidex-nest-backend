import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CirculaireModule, FiliereModule, ImgModule, LinkModule, PlacementModule, PositionModule, SignificationModule, SymboleModule } from './routes';

@Module({
	imports: [SymboleModule, FiliereModule, SignificationModule, ImgModule, PlacementModule, PositionModule, CirculaireModule, LinkModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

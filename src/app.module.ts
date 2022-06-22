import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  CirculaireModule,
  FiliereModule,
  ImgModule,
  DataLinkModule,
  CirculaireColorLinkModule,
  PlacementModule,
  PositionModule,
  SignificationModule,
  SymboleModule,
  SymboleSensModule,
  SymboleAccessoriesModule,
} from './routes';
import { ColorModule } from './routes/color/color.module';

@Module({
  imports: [
    SymboleModule,
    SymboleSensModule,
    SymboleAccessoriesModule,
    FiliereModule,
    SignificationModule,
    //ImgModule,
    PlacementModule,
    PositionModule,
    CirculaireModule,
    ColorModule,
    DataLinkModule,
    CirculaireColorLinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

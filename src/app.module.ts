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
import { AuthRouteModule } from './routes/auth/auth.module';
import { ColorModule } from './routes/color/color.module';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';

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
    AuthModule,
    UsersModule,
    AuthRouteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

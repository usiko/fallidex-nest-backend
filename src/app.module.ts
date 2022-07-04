import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
    MongooseModule.forRoot(
      'mongodb+srv://usiko:<password>@cluster0.qxyei.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

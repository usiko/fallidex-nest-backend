import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemIndexMongoModule } from './mongo/modules/item-index.mongo.module';
import { MongoModule } from './mongo/mongo.module';
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
import { CacheClearModule } from './routes/clear-cache/clear-cache.module';
import { ColorModule } from './routes/color/color.module';
import { ItemMetadataModule } from './routes/item-metadata/item-medatada.module';
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
    ItemMetadataModule,
    CacheClearModule,
    MongoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

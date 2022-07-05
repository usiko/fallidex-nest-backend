import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CircularColorMongoModule } from './modules/circular-color.mongo.module';
import { CircularMongoModule } from './modules/circular.mongo.module';
import { ColorMongoModule } from './modules/color.mongo.module';
import { EarnMongoModule } from './modules/earn.mongo.module';
import { MeaningMongoModule } from './modules/meaning.mongo.module';
import { PositionMongoModule } from './modules/position.mongo.module';
import { StudieMongoModule } from './modules/studie.mongo.module';
import { SymbolDirectionMongoModule } from './modules/symbol-direction.mongo.module';
import { SymbolMongoModule } from './modules/symbol.mongo.module';
import { SymbolAccessorieMongoModule } from './modules/symbole-accessorie.mongo.module';

@Module({
  imports: [
    SymbolMongoModule,
    StudieMongoModule,
    ColorMongoModule,
    CircularMongoModule,
    CircularColorMongoModule,
    PositionMongoModule,
    MeaningMongoModule,
    SymbolAccessorieMongoModule,
    SymbolDirectionMongoModule,
    EarnMongoModule,
    MongooseModule.forRoot(
      'mongodb+srv://usiko:V1ZvLEdSe8ZpGirf@cluster0.qxyei.mongodb.net/falidex?retryWrites=true&w=majority',
    ),
  ],
  exports: [
    SymbolMongoModule,
    StudieMongoModule,
    ColorMongoModule,
    CircularMongoModule,
    CircularColorMongoModule,
    PositionMongoModule,
    MeaningMongoModule,
    SymbolAccessorieMongoModule,
    SymbolDirectionMongoModule,
    EarnMongoModule,
  ],
})
export class MongoModule {}

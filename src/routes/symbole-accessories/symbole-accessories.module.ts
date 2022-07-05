import { Module } from '@nestjs/common';
import { SymbolAccessorieMongoModule } from 'src/mongo/modules/symbole-accessorie.mongo.module';
import { SymboleAcessoriesController } from './symbole-accessories.controller';
import { SymboleAccessoriesService } from './symbole-accessories.service';

@Module({
  imports: [SymbolAccessorieMongoModule],
  controllers: [SymboleAcessoriesController],
  providers: [SymboleAccessoriesService],
})
export class SymboleAccessoriesModule {}

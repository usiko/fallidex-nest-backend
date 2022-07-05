import { Module } from '@nestjs/common';
import { SymbolDirectionMongoModule } from 'src/mongo/modules/symbol-direction.mongo.module';
import { SymboleSensController } from './symbole-sens.controller';
import { SymboleSensService } from './symbole-sens.service';

@Module({
  imports: [SymbolDirectionMongoModule],
  controllers: [SymboleSensController],
  providers: [SymboleSensService],
})
export class SymboleSensModule {}

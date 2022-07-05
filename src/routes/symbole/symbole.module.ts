import { Module } from '@nestjs/common';
import { SymbolMongoModule } from 'src/mongo/modules/symbol.mongo.module';
import { SymboleController } from './symbole.controller';
import { SymboleService } from './symbole.service';

@Module({
  imports: [SymbolMongoModule],
  controllers: [SymboleController],
  providers: [SymboleService],
})
export class SymboleModule {}

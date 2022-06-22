import { Module } from '@nestjs/common';
import { SymboleSensController } from './symbole-sens.controller';
import { SymboleSensService } from './symbole-sens.service';

@Module({
  imports: [],
  controllers: [SymboleSensController],
  providers: [SymboleSensService],
})
export class SymboleSensModule {}

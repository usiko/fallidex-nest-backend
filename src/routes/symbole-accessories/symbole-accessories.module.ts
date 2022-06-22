import { Module } from '@nestjs/common';
import { SymboleAcessoriesController } from './symbole-accessories.controller';
import { SymboleAccessoriesService } from './symbole-accessories.service';

@Module({
  imports: [],
  controllers: [SymboleAcessoriesController],
  providers: [SymboleAccessoriesService],
})
export class SymboleAccessoriesModule {}

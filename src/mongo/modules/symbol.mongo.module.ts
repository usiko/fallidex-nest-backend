import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SymbolSchema } from '../schemas/symbol.schema';
import { SymbolMongoService } from '../services/symbols.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Symbol.name, schema: SymbolSchema }]),
  ],

  providers: [SymbolMongoService],
  exports: [SymbolMongoService],
})
export class SymbolMongoModule {}

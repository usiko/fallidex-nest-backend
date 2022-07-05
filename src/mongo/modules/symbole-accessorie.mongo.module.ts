import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SymbolAccessorie,
  SymbolAccessorieSchema,
} from '../schemas/symbol-accessorie.schema';
import { SymbolAccessorieMongoService } from '../services/symbol-accessorie.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SymbolAccessorie.name, schema: SymbolAccessorieSchema },
    ]),
  ],

  providers: [SymbolAccessorieMongoService],
})
export class SymbolAccessorieMongoModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SymbolDirection,
  SymbolDirectionSchema,
} from '../schemas/symbol-direction.schema';
import { SymbolDirectionMongoService } from '../services/symbol-direction.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SymbolDirection.name, schema: SymbolDirectionSchema },
    ]),
  ],

  providers: [SymbolDirectionMongoService],
  exports: [SymbolDirectionMongoService],
})
export class SymbolDirectionMongoModule {}

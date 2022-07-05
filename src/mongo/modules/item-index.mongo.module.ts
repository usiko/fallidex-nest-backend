import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemIndex, ItemIndexSchema } from '../schemas/item-index.schema';
import { ItemIndexMongoService } from '../services/item-index..mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ItemIndex.name, schema: ItemIndexSchema },
    ]),
  ],

  providers: [ItemIndexMongoService],
  exports: [ItemIndexMongoService],
})
export class ItemIndexMongoModule {}

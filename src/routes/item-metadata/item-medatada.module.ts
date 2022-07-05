import { Module } from '@nestjs/common';
import { ItemIndexMongoModule } from 'src/mongo/modules/item-index.mongo.module';
import { SymbolMongoModule } from 'src/mongo/modules/symbol.mongo.module';
import { ItemMetadataController } from './item-medatada.controller';
import { ItemMetadataService } from './item-medatada.service';

@Module({
  imports: [ItemIndexMongoModule],
  controllers: [ItemMetadataController],
  providers: [ItemMetadataService],
})
export class ItemMetadataModule {}

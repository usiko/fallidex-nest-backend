import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Relation, RelationSchema } from '../schemas/relation.schema';
import { RelationMongoService } from '../services/relation.mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Relation.name, schema: RelationSchema },
    ]),
  ],

  providers: [RelationMongoService],
  exports: [RelationMongoService],
})
export class RelationMongoModule {}

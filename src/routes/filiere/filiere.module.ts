import { Module } from '@nestjs/common';
import { StudieMongoModule } from 'src/mongo/modules/studie.mongo.module';
import { FiliereController } from './filiere.controller';
import { FiliereService } from './filiere.service';

@Module({
  imports: [StudieMongoModule],
  controllers: [FiliereController],
  providers: [FiliereService],
})
export class FiliereModule {}

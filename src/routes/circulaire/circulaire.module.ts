import { Module } from '@nestjs/common';
import { CircularMongoModule } from 'src/mongo/modules/circular.mongo.module';
import { CirculaireController } from './circulaire.controller';
import { CirculaireService } from './circulaire.service';

@Module({
  imports: [CircularMongoModule],
  controllers: [CirculaireController],
  providers: [CirculaireService],
})
export class CirculaireModule {}

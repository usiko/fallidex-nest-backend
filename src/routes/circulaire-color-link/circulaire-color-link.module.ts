import { Module } from '@nestjs/common';
import { CircularColorMongoModule } from 'src/mongo/modules/circular-color.mongo.module';
import { CirculaireColorLinkController } from './circulaire-color-link.controller';
import { CirculaireColorLinkService } from './circulaire-color-link.service';

@Module({
  imports: [CircularColorMongoModule],
  controllers: [CirculaireColorLinkController],
  providers: [CirculaireColorLinkService],
})
export class CirculaireColorLinkModule {}

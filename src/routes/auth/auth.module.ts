import { Module } from '@nestjs/common';
import { CirculaireController } from './auth.controller';
import { CirculaireService } from './auth.service';

@Module({
  imports: [],
  controllers: [CirculaireController],
  providers: [CirculaireService],
})
export class CirculaireModule {}

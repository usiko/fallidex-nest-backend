import { Module } from '@nestjs/common';
import { CacheClearController } from './clear-cache.controller';
import { CacheClearService } from './clear-cache.service';

@Module({
  imports: [],
  controllers: [CacheClearController],
  providers: [CacheClearService],
})
export class CacheClearModule {}

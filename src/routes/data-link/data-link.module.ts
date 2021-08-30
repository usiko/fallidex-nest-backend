import { Module } from '@nestjs/common';
import { DataLinkController } from './data-link.controller';
import { DataLinkService } from './data-link.service';


@Module({
	imports: [],
	controllers: [DataLinkController],
	providers: [DataLinkService],
})
export class DataLinkModule { }

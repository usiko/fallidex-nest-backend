import { Module } from '@nestjs/common';
import { SignificationController } from './signification.controller';
import { SignificationService } from './signification.service';

@Module({
	imports: [],
	controllers: [SignificationController],
	providers: [SignificationService],
})
export class SignificationModule { }

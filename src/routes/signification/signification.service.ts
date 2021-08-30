import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class SignificationService extends Rest<any> {
	database = 'signfication';
}

import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class DataLinkService extends Rest<any> {
	database = 'link';
}

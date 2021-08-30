import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class LinkService extends Rest<any> {
	database = 'link';
}

import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class ImgService extends Rest<any> {
	database = 'img';
}

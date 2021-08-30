import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class ColorService extends Rest<any> {
	database = 'color';
}

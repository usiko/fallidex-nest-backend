import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class PositionService extends Rest<any> {
	database = 'position';
}

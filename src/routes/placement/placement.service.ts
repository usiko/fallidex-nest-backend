import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class PlacementService extends Rest<any> {
	database = 'placement';
}

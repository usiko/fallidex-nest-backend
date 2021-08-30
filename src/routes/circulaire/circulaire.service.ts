import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class CirculaireService extends Rest<any> {
	database = 'circulaire';
}

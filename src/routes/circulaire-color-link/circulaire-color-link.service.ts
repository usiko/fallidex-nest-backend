import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class CirculaireColorLinkService extends Rest<any> {
	database = 'circulaire-color-link';
}

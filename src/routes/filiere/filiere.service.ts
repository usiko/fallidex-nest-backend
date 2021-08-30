import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class FiliereService extends Rest<any> {
	database = 'filiere';
}

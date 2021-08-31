import { Injectable } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { Rest } from '../class/rest.class';

@Injectable()
export class FiliereService extends Rest<any> {
	database = pathEnum.FILIERE;
}

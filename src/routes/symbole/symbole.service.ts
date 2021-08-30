import { Injectable } from '@nestjs/common';
import { Rest } from '../class/rest.class';

@Injectable()
export class SymboleService extends Rest<any> {
	database = 'symbole';
}

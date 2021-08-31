import { Injectable } from '@nestjs/common';
import { pathEnum } from './models/enum';

@Injectable()
export class AppService {
	getHello(): string {
		const path = pathEnum;
		const arr = [];
		for (const key in path) {
			if (Object.prototype.hasOwnProperty.call(path, key)) {
				arr.push(path[key]);

			}
		}

		return arr.map(item => {
			return `<div><a href="/${item}">${item}</a></div>`;
		}).join('');

	}
}

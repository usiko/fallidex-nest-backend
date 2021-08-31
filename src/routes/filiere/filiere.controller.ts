import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { pathEnum } from 'src/models/enum';
import { CtrlRoute } from '../class/controller.class';
import { FiliereService } from './filiere.service';

@Controller(pathEnum.FILIERE)
export class FiliereController extends CtrlRoute<any>{
	constructor(protected dataService: FiliereService) {
		super();
	}

	@Get()
	get() {
		return super.get();
	}

	@Get(':id')
	getItem(@Param() params) {
		return super.getItem(params);
	}

	@Post()
	Post(@Param() params) {
		super.post(params);
	}
	@Put()
	Put(@Param() params) {
		super.put(params);
	}


}

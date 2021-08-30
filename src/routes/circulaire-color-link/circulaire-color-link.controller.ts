import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CtrlRoute } from '../class/controller.class';
import { CirculaireColorLinkService } from './circulaire-color-link.service';

@Controller('circulaire-color-link')
export class CirculaireColorLinkController extends CtrlRoute<any>{
	constructor(protected dataService: CirculaireColorLinkService) {
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

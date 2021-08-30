import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CtrlRoute } from '../class/controller.class';
import { PositionService } from './position.service';

@Controller('position')
export class PositionController extends CtrlRoute<any>{
	constructor(protected dataService: PositionService) {
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

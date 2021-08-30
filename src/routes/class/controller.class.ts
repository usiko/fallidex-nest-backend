import { Rest } from "./rest.class";

export class CtrlRoute<T> {

	// were we go get data;
	protected dataService: Rest<T>;

	get(): string {
		return this.dataService.findAll().join(',');
	}

	getItem(params): T {
		return this.dataService.getItem(params.id);
	}

	put(params): any {
		return this.dataService.modify();
	}

	post(params): any {
		return this.dataService.create();
	}
}
import { GlobalMockService } from "src/global/global-mock.service";

export class Rest<T> {

	// were we go get data;
	protected database: string;



	findAll(): any[] {
		return GlobalMockService.getFromDatabaseName(this.database);
		return [this.database];
	}

	getItem(id: string): any {
		return this.database + ' ' + id;
	}

	modify(): any {

	}

	create(): any {

	}
}

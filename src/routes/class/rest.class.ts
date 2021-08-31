import { GlobalMockService } from "src/global/global-mock.service";
import { pathEnum } from "src/models/enum";

export class Rest<T> {

	// were we go get data;
	protected database: pathEnum;



	findAll(): { item: any[], lastUpdate: string; } {
		return GlobalMockService.getFromDatabaseName(this.database);
	}

	getItem(id: string): any {
		return GlobalMockService.getItemFromDatabaseName(this.database, id);
	}

	modify(): any {

	}

	create(): any {

	}
}

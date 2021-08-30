export class Rest<T> {

	// were we go get data;
	protected database: string;

	findAll(): any[] {
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

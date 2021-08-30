export class idGetter {
	private keyword: string
	private incr: number = 0;
	constructor(keyword: string) {
		this.keyword = keyword;
	}

	getId() {
		let id = this.keyword + '-' + this.incr;
		this.incr++;
		return id;
	}
}
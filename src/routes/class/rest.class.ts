import { GlobalMockService } from "src/global/global-mock.service";

export class Rest<T> {

    // were we go get data;
    protected database: string;



    findAll(): { item: any[], lastUpdate: string } {
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

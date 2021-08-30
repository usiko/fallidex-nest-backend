import { MockData } from '../mock-data';
import { DataLinks } from './links/data-links';



export class NationalMockData extends MockData {
    constructor() {
        super('national');
        this.name = 'National 131';
        this.links = DataLinks.links;
        //this.disabled = true;
    }
}
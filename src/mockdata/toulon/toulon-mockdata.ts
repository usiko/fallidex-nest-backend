import { MockData } from '../mock-data';
import { DataLinks } from './links/data-links';
import { FileCodeData } from './items/file-code-data';
import { OtherSpe } from './items/textspe-data';
import { ImgDataLinks } from '../links/img-symbole-link';



export class ToulonMockData extends MockData {
    constructor() {
        super('toulon');
        this.name = 'Toulon 131';
        this.items.fileCode = this.itemsToArray(FileCodeData);
        this.items.textSpes = this.itemsToArray(OtherSpe);
        this.links = DataLinks.links;

    }
}
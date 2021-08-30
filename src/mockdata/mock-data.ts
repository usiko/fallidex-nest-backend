import { DataItems, LinkModel, DataItem, LinkImgSymboleModel } from './types';
import { CirculaireData } from './items/circulaires-data';
import { filieresData } from './items/filieres-data';
import { SymboleData } from './items/symbole-data';
import { PositionData } from './items/position-data';
import { PlacementData } from './items/placement-data';
import { SignificationsData } from './items/signification-data';
import { UrlIgmData } from './items/url-img.data';
import { ImgDataLinks } from './links/img-symbole-link';

export class MockData {
    public id: string;
    public disabled: boolean;
    public name: string;
    public links: LinkModel[];
    public linksSymbole: LinkImgSymboleModel[];
    public items: DataItems =
        {
            circulaires: [],
            filieres: [],
            symboles: [],
            positions: [],
            placement: [],
            significations: [],
            imgUrls: [],
            fileCode: [],
            textSpes: []

        }


    constructor(id: string) {
        this.id = id;
        this.items = {
            circulaires: this.itemsToArray(CirculaireData),
            filieres: this.itemsToArray(filieresData),
            symboles: this.itemsToArray(SymboleData),
            positions: this.itemsToArray(PositionData),
            placement: this.itemsToArray(PlacementData),
            significations: this.itemsToArray(SignificationsData),
            imgUrls: this.itemsToArray(UrlIgmData),
            fileCode: [],
            textSpes: []

        };
        this.linksSymbole = ImgDataLinks.links;

    }

    protected itemsToArray(itemObs: DataItem) {
        const arr = [];
        for (const key in itemObs) {
            if (itemObs.hasOwnProperty(key) && key[0] !== '_') {
                arr.push(itemObs[key]);
            }
        }

        return arr.slice();
    }
}
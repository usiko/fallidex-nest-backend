import { Injectable } from '@nestjs/common';
import { CirculaireData } from 'src/mockdata/items/circulaires-data';
import { DataCouleur } from 'src/mockdata/items/colors-data';
import { filieresData } from 'src/mockdata/items/filieres-data';
import { PlacementData } from 'src/mockdata/items/placement-data';
import { PositionData } from 'src/mockdata/items/position-data';
import { SignificationsData } from 'src/mockdata/items/signification-data';
import { SymboleData } from 'src/mockdata/items/symbole-data';
import { UrlIgmData } from 'src/mockdata/items/url-img.data';
import { CirculaireColorLinks } from 'src/mockdata/links/circulaire-color-link';
import { ImgDataLinks } from 'src/mockdata/links/img-symbole-link';
import { nationaldata } from 'src/mockdata/national/data';
import { toulondata } from 'src/mockdata/toulon/data';
import { OtherSpe } from 'src/mockdata/toulon/items/textspe-data';
import { DataLinks } from 'src/mockdata/toulon/links/data-links';
import { ToulonMockData } from 'src/mockdata/toulon/toulon-mockdata';
import { DataItem } from 'src/mockdata/types';
import { ImgUrl, Symbole, TextSpe } from 'src/models/models';

@Injectable()
export class GlobalMockService {

    static getCity(name) {
        return {
            name,
            spes: this.itemsToArray(OtherSpe),
            links: DataLinks.links
        };
    }
    static getFromDatabaseName(name: string) {
        const data = this.resolvedb(name)

        if (!Array.isArray(data)) {
            return {
                item: this.itemsToArray(data),
                lastUpdate: '30/08/2021 20:58'
            }
        }
        else {
            return {
                item: data,
                lastUpdate: '30/08/2021 20:58'
            }
        }
    }
    static getItemFromDatabaseName(name: string, id: string) {
        if (name === "data-link") {
            if (id === "toulon") {
                return toulondata;
            }
            else {
                return nationaldata;
            }
        }
        else {
            const data = this.resolvedb(name);
            return this.itemsToArray(data).find(item => item.id === id);
        }
    }
    static getCirculaires(): DataItem {
        return CirculaireData;
    }

    static getSymboles(): DataItem {
        const symboles = SymboleData;
        const links = ImgDataLinks.links;
        const imgdata = this.itemsToArray(UrlIgmData);
        for (const key in symboles) {
            if (symboles.prototype.hasOwnProperty.call(symboles, key)) {
                const element: Symbole = symboles[key];
                const finds = links.filter(item => {
                    return item.symboleId === element.id;
                });
                if (finds.length > 0) {

                    element.img = finds.map(find => {
                        return imgdata.find((item: ImgUrl) => {
                            return item.id == find.imgid;
                        });
                    });
                }


            }
        }
        return symboles;
    }

    static getFilieres(): DataItem {
        return filieresData;
    }

    static getImgs(): DataItem {
        return UrlIgmData;
    }

    static getSignifications() {
        return SignificationsData;
    }

    static getPlacement() {
        return PlacementData;
    }

    static getPositions() {
        return PositionData;
    }

    static getColors() {
        return DataCouleur;
    }

    static getDataLinks() {
        return DataLinks;
    }

    static getImgSymboleLink() {
        return ImgDataLinks;
    }

    static getCirculaireColorLinks() {
        return CirculaireColorLinks;
    }

    static itemsToArray(itemObs: DataItem) {
        const arr = [];
        for (const key in itemObs) {
            if (itemObs.hasOwnProperty(key) && key[0] !== '_') {
                arr.push(itemObs[key]);
            }
        }

        return arr.slice();
    }

    static resolvedb(name: string) {
        switch (name) {
            case 'circulaire':
                return this.getCirculaires();
                break;
            case 'symbole':
                return this.getSymboles();
                break;
            case 'filiere':

                return this.getFilieres();
                break;
            case 'img':
                return this.getImgs();
                break;
            case 'signification':
                return this.getSignifications;
                break;
            case 'placement':
                return this.getPlacement();
                break;
            case 'position':
                return this.getPositions();
                break;
            case 'color':
                return this.getColors();
                break;
            case 'data-link':
                return this.getDataLinks().links;
                break;
            case 'circulaire-color-link':
                return this.getCirculaireColorLinks().links;
                break;
            case 'circulaire-color-link':
                return this.getCirculaireColorLinks().links;
                break;
        }
    }
}

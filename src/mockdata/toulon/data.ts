import { OtherSpe } from "./items/textspe-data";
import { DataLinks } from "./links/data-links"
const links = DataLinks.links;
export const toulondata = {
    name: 'toulon',
    links: DataLinks.links,
    spe: itemsToArray(OtherSpe),
    lastUpdate: '30/08/2021 20:58'

}

function itemsToArray(itemObs: any) {
    const arr = [];
    for (const key in itemObs) {
        if (itemObs.hasOwnProperty(key) && key[0] !== '_') {
            arr.push(itemObs[key]);
        }
    }

    return arr.slice();

}
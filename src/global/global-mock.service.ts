import { Injectable } from '@nestjs/common';
import * as CirculairesColorJson from 'src/mockdata/items/circulaires-colors.json';
import * as CirculairesJson from 'src/mockdata/items/circulaires.json';
import * as ColorsJson from 'src/mockdata/items/colors.json';
import * as FiliereJson from 'src/mockdata/items/filieres.json';
import * as PlacementJson from 'src/mockdata/items/placements.json';
import * as PositionJson from 'src/mockdata/items/positions.json';
import * as SignificationsJson from 'src/mockdata/items/significations.json';
import * as SymbolAccessJson from 'src/mockdata/items/symbole-accessoire.json';
import * as SymbolsensJson from 'src/mockdata/items/symboles-sens.json';
import * as SymbolsJson from 'src/mockdata/items/symboles.json';
//import { UrlIgmData } from 'src/mockdata/items/url-img.data';
//import { CirculaireColorLinks } from 'src/mockdata/links/circulaire-color-link';
//import { ImgDataLinks } from 'src/mockdata/links/img-symbole-link';
import * as nationalJson from 'src/mockdata/relations/national.json';
import * as toulonJson from 'src/mockdata/relations/toulon.json';
import * as RelationsJson from 'src/mockdata/relations/list-relations.json';
import { DataItem } from 'src/mockdata/types';
import { pathEnum } from 'src/models/enum';

@Injectable()
export class GlobalMockService {
  static availableLinks = [nationalJson, toulonJson];

  static getFromDatabaseName(name: pathEnum) {
    const data = this.resolvedb(name);
    if (name === pathEnum.LINK) {
      return {
        item: this.availableLinks.map((item) => {
          return item.name;
        }),
        lastUpdate: '30/08/2021 20:58',
      };
    } else if (!Array.isArray(data)) {
      return {
        item: this.itemsToArray(data),
        lastUpdate: '30/08/2021 20:58',
      };
    } else {
      return {
        item: data,
        lastUpdate: '30/08/2021 20:58',
      };
    }
  }
  static getItemFromDatabaseName(name: pathEnum, id: string) {
    console.log(id);
    if (name === pathEnum.LINK) {
      return this.availableLinks.find((item) => {
        console.log(item.id);
        return item.id === id;
      });
    } else {
      const data = this.resolvedb(name);
      return this.itemsToArray(data).find((item) => item.id === id);
    }
  }
  static getCirculaires(): DataItem {
    return CirculairesJson;
  }

  static getSymboles(): DataItem {
    /*const symboles = SymboleData;
						const links = ImgDataLinks.links;
						const imgdata = this.itemsToArray(UrlIgmData);
						for (const key in symboles) {
						  if (symboles.prototype.hasOwnProperty.call(symboles, key)) {
							const element: Symbole = symboles[key];
							const finds = links.filter((item) => {
							  return item.symboleId === element.id;
							});
							if (finds.length > 0) {
				    
							  element.img = finds.map((find) => {
								return imgdata.find((item: ImgUrl) => {
								  return item.id == find.imgid;
								});
							  });
							}
				    
				    
						  }
						}
						return symboles;*/
    return SymbolsJson;
  }

  static getSymboleSens(): DataItem {
    return SymbolsensJson;
  }
  static getSymboleAccessories(): DataItem {
    return SymbolAccessJson;
  }

  static getFilieres(): DataItem {
    return FiliereJson;
  }

  /*static getImgs(): DataItem {
			  return UrlIgmData;
			}*/

  static getSignifications() {
    return SignificationsJson;
  }

  static getPlacement() {
    return PlacementJson;
  }

  static getPositions() {
    return PositionJson;
  }

  static getColors() {
    return ColorsJson;
  }

  static getRelations() {
    return RelationsJson;
  }

  /*static getImgSymboleLink() {
			   return ImgDataLinks;
			 }*/

  static getCirculaireColors() {
    return CirculairesColorJson;
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

  static resolvedb(name: pathEnum) {
    switch (name) {
      case pathEnum.CIRCULAIRE:
        return this.getCirculaires();
      case pathEnum.SYMBOLE:
        return this.getSymboles();
      case pathEnum.SYMBOLESENS:
        return this.getSymboleSens();
      case pathEnum.SYMBOLEACCESSORIES:
        return this.getSymboleAccessories();
      case pathEnum.FILIERE:
        return this.getFilieres();

      /*case pathEnum.img:
										return this.getImgs();*/

      case pathEnum.SIGNIFICATION:
        return this.getSignifications();

      case pathEnum.PLACEMENT:
        return this.getPlacement();

      case pathEnum.POSITION:
        return this.getPositions();

      case pathEnum.COLOR:
        return this.getColors();

      case pathEnum.LINK:
        return this.getRelations();

      case pathEnum.CIRCULAIRE_COLOR:
        return this.getCirculaireColors();
    }
  }
}

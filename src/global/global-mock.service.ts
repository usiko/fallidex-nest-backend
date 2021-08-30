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
		let data;
		switch (name) {
			case 'circulaire':
				data = this.getCirculaires();
				break;
			case 'symbole':
				data = this.getSymboles();
				break;
			case 'filiere':

				data = this.getFilieres();
				break;
			case 'img':
				data = this.getImgs();
				break;
			case 'signification':
				data = this.getSignifications;
				break;
			case 'placement':
				data = this.getPlacement();
				break;
			case 'position':
				data = this.getPositions();
				break;
			case 'color':
				data = this.getColors();
				break;
			/*case 'data-link':
				data = this.getDataLinks().links;
				break;*/
			case 'circulaire-color-link':
				data = this.getCirculaireColorLinks().links;
				break;
			case 'circulaire-color-link':
				data = this.getCirculaireColorLinks().links;
				break;
		}
		if (!Array.isArray(data)) {
			return this.itemsToArray(data);
		}
		else {
			return data;
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
}

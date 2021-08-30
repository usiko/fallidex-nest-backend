
export class SymbFil { symbole: Symbole; filiere: Filiere; } [];
export class CircCouleur {
	id: string;
	name: string;
	couleur: string;
	constructor(name: string, couleur: string, id?: string) {
		if (id) {
			this.id = id;
		}

		this.name = name;
		this.couleur = couleur;
	}

}
export enum CiculaireMatiereEnum {
	satin = 'SATIN',
	velours = 'VELOURS'
}
export class Circulaire {
	id: string;
	name: string;
	couleur?: CircCouleur[] = [];
	matiere?: CiculaireMatiereEnum;
	symboles?: Symbole[] = [];  // link
	filieres?: Filiere[] = [];  // link

	symbFils?: SymbFil[] = [];


	constructor(name: string, matiere: CiculaireMatiereEnum, id?: string) {
		this.matiere = matiere;
		this.name = name;
		if (id) {
			this.id = id;
		}

	}

	setFileres(filieres: Filiere[]) {
		this.filieres = filieres;
		return this;
	}

	setSymbFils(data: SymbFil[]) {
		this.symbFils = data;
		return this;
	}

	setCouleurs(couleur: CircCouleur[]) {
		this.couleur = couleur;
		return this;
	}


}

export class CircSymbole { symbole: Symbole; circulaire: Circulaire; positions?: PositionItem[]; spe?: boolean; }
export class Filiere {
	id: string;
	name: string;
	specificite = false;
	circulaires?: Circulaire[] = []; // link
	symboles?: Symbole[] = []; // link
	circSymboles?: CircSymbole[] = []; // link
	constructor(name: string, id?: string, spe?: boolean) {
		this.name = name;
		if (id) {
			this.id = id;
		}


		if (spe) {
			this.specificite = spe;
		}
	}

	setCirculaires(circulaires: Circulaire[]) {
		this.circulaires = circulaires;
		return this;
	}

	setCircSymboles(data: CircSymbole[]) {
		this.circSymboles = data;
		return this;
	}
}

export class PositionItem {
	id: string;
	name: string;
	signification?: Signification[] = []; // link
	symboles?: Symbole[] = []; // link

	constructor(name: string, id?: string) {
		this.name = name;
		if (id) {
			this.id = id;
		}

	}
}

export class Placement {
	id: string;
	name: string;

	constructor(name: string, id?: string) {
		this.name = name;
		if (id) {
			this.id = id;
		}

	}
}
export class PosSymbole { symbole: Symbole; positions?: PositionItem[]; spe?: boolean; }
export class Signification {
	id: string;
	content: string;
	blame = false;
	spe = false;
	positions?: PositionItem[] = []; // used from symbole
	posSymboles?: PosSymbole[] = []; // used from signification
	placement: Placement;

	constructor(content: string, id?: string, blame?: boolean) {
		this.content = content;
		if (id) {
			this.id = id;
		}
		if (blame) {
			this.blame = blame;
		}
	}

	setPostions(positions: PositionItem[]) {
		this.positions = positions;
		return this;
	}

	getAllPostionsName() {
		return this.positions.map(p => p.name);
	}
}

export class CircFil { circulaire: Circulaire; filiere: Filiere; positions?: PositionItem[]; spe?: boolean; }
export class Symbole {
	id: string;
	name: string;
	img: ImgUrl[];

	significations?: Signification[] = []; // link

	circulaires?: Circulaire[] = []; // link
	filieres?: Filiere[] = []; // link

	note: string;
	circFil: CircFil[] = [];
	constructor(name: string, id?: string, note?: string) {
		this.name = name;
		if (id) {
			this.id = id;
		}

		if (note) {
			this.note = note;
		}
	}

	setImgs(imgs: ImgUrl[]) {
		this.img = imgs;
	}
	setCirculaires(circulaires: Circulaire[]) {
		this.circulaires = circulaires;
		return this;
	}
	setSignifications(significations: Signification[]) {
		this.significations = significations;
		return this;
	}

	setCirFil(data: CircFil[]) {
		this.circFil = data;
		return this;
	}
}


export class TextSpe {
	id: string;
	name: string;
	text: string;
	article?: string;
	note?: string;
	constructor(name: string, text: string, id?: string, article?: string, note?: string) {
		this.name = name;
		this.text = text;
		if (id) {
			this.id = id;
		}
		if (article) {
			this.article = article;
		}
		if (note) {
			this.note = note;
		}
	}
}

export class ImgUrl {
	public id;
	public url;
	constructor(url: string, id: string) {

		this.id = id;
		this.url = url;

	}
}

export class FileCode {
	public id;
	name: string;
	url: string;
	updateDate: Date;
	constructor(name: string, url: string, updateDate: Date, id?: string,) {
		this.id = id;
		this.name = name;
		this.url = url;
		if (updateDate) {
			this.updateDate = updateDate;
		}
		if (id) {
			this.id = id;
		}

	}
}


import { idGetter } from '../id-getter';
import { CircCouleur } from 'src/models/models';

export class DataCouleur {
	static _idGen = new idGetter('color');
	static rouge = new CircCouleur('rouge', '#ff0000', DataCouleur._idGen.getId());
	static vert = new CircCouleur('vert', '#03a903', DataCouleur._idGen.getId());
	static vert_pomme = new CircCouleur('vert pomme', '#34c924', DataCouleur._idGen.getId());
	static vert_fonce = new CircCouleur('vert fonce', '#196B19', DataCouleur._idGen.getId());
	static vert_olive = new CircCouleur('moiré vert', '#6B8E23', DataCouleur._idGen.getId());
	static bleu = new CircCouleur('bleu', '#0000ff', DataCouleur._idGen.getId());
	static bleu_roy = new CircCouleur('bleu', '#318ce7', DataCouleur._idGen.getId());
	static noir = new CircCouleur('noir', '#000000', DataCouleur._idGen.getId());
	static gris = new CircCouleur('gris', '#555555', DataCouleur._idGen.getId());
	static blanc = new CircCouleur('blanc', '#ffffff', DataCouleur._idGen.getId());
	static jaune = new CircCouleur('jaune', '#ffff00', DataCouleur._idGen.getId());
	static orange = new CircCouleur('orange', '#ffa500', DataCouleur._idGen.getId());
	static rose = new CircCouleur('rose', '#ffc0cb', DataCouleur._idGen.getId());
	static rose_saumon = new CircCouleur('rose', '#f07977', DataCouleur._idGen.getId());
	static violet = new CircCouleur('violet', '#6e22b4', DataCouleur._idGen.getId());
	static marron = new CircCouleur('marron', '#800000', DataCouleur._idGen.getId());
	static bordeaux = new CircCouleur('bordeaux', '#6D071A', DataCouleur._idGen.getId());
	static fushia = new CircCouleur('fushia', '#ca2c92', DataCouleur._idGen.getId());
	static amarante = new CircCouleur('amarante', '#91283b', DataCouleur._idGen.getId());
}

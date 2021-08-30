

import { DataItem } from '../types';
import { idGetter } from '../id-getter';
import { Filiere } from 'src/models/models';

export class filieresData extends DataItem {
	private static _idGen = new idGetter('filiere');
	static medecine = new Filiere('medecine', filieresData._idGen.getId());
	static infirmer = new Filiere('infirmier', filieresData._idGen.getId());
	static pharmacie = new Filiere('pharmacie', filieresData._idGen.getId());
	static prepa_pharmacie = new Filiere('preparateur en pharmacie', filieresData._idGen.getId());
	static dentaire = new Filiere('dentaire', filieresData._idGen.getId());
	static veterinaire = new Filiere('vétérinaire', filieresData._idGen.getId());
	static sagefemme = new Filiere('sage femme', filieresData._idGen.getId());
	static paramed = new Filiere('paramedical', filieresData._idGen.getId());
	static kine = new Filiere('kinésithérapeute', filieresData._idGen.getId());
	static ergo = new Filiere('ergothérapeute', filieresData._idGen.getId());
	static osteo = new Filiere('ostéopathe', filieresData._idGen.getId());
	static paces = new Filiere('PACES, prepa santé', filieresData._idGen.getId());

	static droit = new Filiere('droit', filieresData._idGen.getId());
	static seg = new Filiere('Sciences économie et gestion', filieresData._idGen.getId());
	static gestion = new Filiere('gestion', filieresData._idGen.getId());
	static iae = new Filiere('IAE', filieresData._idGen.getId());
	static tourismes = new Filiere('tourisme', filieresData._idGen.getId());
	static ingemedia = new Filiere('ingemedia', filieresData._idGen.getId());
	static lsh = new Filiere('lettres et sciences humaines', filieresData._idGen.getId());
	static geog = new Filiere('geographie', filieresData._idGen.getId());
	static histoire = new Filiere('histoire', filieresData._idGen.getId());
	static lea = new Filiere('LEA', filieresData._idGen.getId());
	static langue = new Filiere('langues', filieresData._idGen.getId());
	static philo = new Filiere('philosophie', filieresData._idGen.getId());
	static psy = new Filiere('psychologie', filieresData._idGen.getId());
	static socio = new Filiere('sociologie', filieresData._idGen.getId());
	static archeo = new Filiere('archéologie', filieresData._idGen.getId());
	static ethno = new Filiere('ethnologie', filieresData._idGen.getId());
	static hist_art = new Filiere('histoire de l\'art', filieresData._idGen.getId());
	static architect = new Filiere('Architecture', filieresData._idGen.getId());
	static beauart = new Filiere('beau arts, arts plastiques', filieresData._idGen.getId());
	static cinema = new Filiere('cinéma ou audiovisuel', filieresData._idGen.getId());
	static theatre = new Filiere('theatre, art du spéctacle', filieresData._idGen.getId());
	static numerique = new Filiere('filière/art numerique', filieresData._idGen.getId());
	static iutbts = new Filiere('IUT/BTS', filieresData._idGen.getId());
	static iup = new Filiere('IUP', filieresData._idGen.getId());
	static sciences = new Filiere('sciences', filieresData._idGen.getId());
	static oenologie = new Filiere('oenologie', filieresData._idGen.getId());
	static staps = new Filiere('filieres sportive', filieresData._idGen.getId());
	static aes = new Filiere('AES', filieresData._idGen.getId());
	static prepa = new Filiere('class préparatoire', filieresData._idGen.getId());
	static theologie = new Filiere('théologie', filieresData._idGen.getId());
	static musicologie = new Filiere('musicologie', filieresData._idGen.getId());
	static notariat = new Filiere('école notariale', filieresData._idGen.getId());
	static politique = new Filiere('sciences politique', filieresData._idGen.getId());
	static commerce = new Filiere('école de commerce', filieresData._idGen.getId());
	static communication = new Filiere('communication', filieresData._idGen.getId());
	static social = new Filiere('social', filieresData._idGen.getId());
	static second_degrés = new Filiere('second degrés', filieresData._idGen.getId());
	static journalisme = new Filiere('journalisme', filieresData._idGen.getId());
	static inge = new Filiere('ingénieur', filieresData._idGen.getId());
	static militaire = new Filiere('école militaire', filieresData._idGen.getId());
	static agricole = new Filiere('agricole', filieresData._idGen.getId());
	static agroalim = new Filiere('agro alimentaire', filieresData._idGen.getId());
	static espe = new Filiere('espe', filieresData._idGen.getId());
	static miashs = new Filiere('miashs', filieresData._idGen.getId());

	static bacl = new Filiere('bac L', filieresData._idGen.getId());
	static baces = new Filiere('bac ES', filieresData._idGen.getId());
	static bacs_bio = new Filiere('bac S spé bio', filieresData._idGen.getId());
	static bacs_math = new Filiere('bac S spé math ou phisique', filieresData._idGen.getId());
	static bacs_techno = new Filiere('bac S option techno', filieresData._idGen.getId());
	static bac_other = new Filiere('autres bacs', filieresData._idGen.getId());
	static bac_int = new Filiere('bac international', filieresData._idGen.getId());
}

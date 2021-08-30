
import { DataItem } from '../types';
import { idGetter } from '../id-getter';
import { Symbole } from 'src/models/models';


export class SymboleData extends DataItem {
	private static _idGen = new idGetter('symbole');
	static caduc_medecine = new Symbole('Caducée de medecine', SymboleData._idGen.getId());
	static caduc_pharmacie = new Symbole('Caducée de pharmacie', SymboleData._idGen.getId());
	static caduc_infirmier = new Symbole('Caducée infirmier', SymboleData._idGen.getId());
	static caduc_mercure = new Symbole('Caducée de mercure', SymboleData._idGen.getId());
	static mortier_pilon = new Symbole('Mortier et pilon', SymboleData._idGen.getId());
	static molaire = new Symbole('Molaire', SymboleData._idGen.getId());
	static tete_cheval = new Symbole('tete de cheval', SymboleData._idGen.getId());
	static croix_ankh = new Symbole('croix d\'ankh', SymboleData._idGen.getId());
	static ciseaux = new Symbole('ciseaux', SymboleData._idGen.getId());
	static sphenoid = new Symbole('sphénoide', SymboleData._idGen.getId());
	static tete_mort_fem = new Symbole('tête de mort croisée fémurs', SymboleData._idGen.getId());
	static balance_et_glaive = new Symbole('Balance et glaive', SymboleData._idGen.getId());
	static soleil = new Symbole('Soleil', SymboleData._idGen.getId());
	static lune = new Symbole('Lune', SymboleData._idGen.getId());
	static livre_plume = new Symbole('Livre ouvert et plume', SymboleData._idGen.getId());
	static plume = new Symbole('plume', SymboleData._idGen.getId());
	static globe = new Symbole('Globe', SymboleData._idGen.getId(), 'Est en fait un planisphère');
	static casque_pericles = new Symbole('Casque de Périclès', SymboleData._idGen.getId(), 'Est en fait le casque D\'Athena');

	static grenouille = new Symbole('grenouille', SymboleData._idGen.getId());
	static grenouille_dor = new Symbole('grenouille dorée', SymboleData._idGen.getId());
	static grenouille_arg = new Symbole('grenouille argentée', SymboleData._idGen.getId());
	static tortue_dor = new Symbole('tortue dorée', SymboleData._idGen.getId());
	static tortue_arg = new Symbole('tortue argentée', SymboleData._idGen.getId());
	static tete_sphinx = new Symbole('tête de sphinx', SymboleData._idGen.getId());
	static palette_pinceaux = new Symbole('palette et pinceaux', SymboleData._idGen.getId());
	static palette_vernie = new Symbole('palette vernie', SymboleData._idGen.getId());
	static equerre_compa = new Symbole('equerre et compas', SymboleData._idGen.getId());
	static clap_cinema = new Symbole('clap de cinema', SymboleData._idGen.getId());
	static masque_comedie = new Symbole('masque de comédie', SymboleData._idGen.getId());
	static arobase = new Symbole('arobase', SymboleData._idGen.getId());
	static palme_science = new Symbole('palmes croisées chêne et lauriers', SymboleData._idGen.getId(), 'avec la lettre de la discipline au centre');
	static grappe_raisin = new Symbole('grappe de raisin', SymboleData._idGen.getId());
	static coq = new Symbole('coq', SymboleData._idGen.getId());
	static chouette_bicephale = new Symbole('chouette bicephale', SymboleData._idGen.getId());
	static etoile_et_foudre = new Symbole('étoile et foudre', SymboleData._idGen.getId());
	static tete_vache_epi_ble = new Symbole('tete de vache sur épi de blé', SymboleData._idGen.getId());
	static epi_ble_fourchette = new Symbole('épi de blé croisé fourchette', SymboleData._idGen.getId());

	static ltruitbts = new Symbole('lettres IUT ou BTS', SymboleData._idGen.getId());
	static ltraes = new Symbole('lettres AES', SymboleData._idGen.getId());
	static ltriae = new Symbole('lettres IAE', SymboleData._idGen.getId());
	static ltrlea = new Symbole('lettres LEA', SymboleData._idGen.getId());
	static ltrecolmilit = new Symbole('lettres de l\'ecole militaire', SymboleData._idGen.getId());
	static ltrespe = new Symbole('lettres ESPE', SymboleData._idGen.getId());
	static ltrth = new Symbole('lettres TH', SymboleData._idGen.getId());
	static ltriup = new Symbole('lettres IUP', SymboleData._idGen.getId());
	static ltrmeef = new Symbole('lettres MEEF', SymboleData._idGen.getId());
	static ltrmiashs = new Symbole('lettres MIASHS', SymboleData._idGen.getId());
	static ltrfil = new Symbole('Initiales de la filière', SymboleData._idGen.getId());

	static etoile_dor = new Symbole('étoile dorée', SymboleData._idGen.getId());
	static etoile_arg = new Symbole('étoile argentée', SymboleData._idGen.getId());
	static tete_mort = new Symbole('tête de mort', SymboleData._idGen.getId());
	static simpl_dipl = new Symbole('simple palme', SymboleData._idGen.getId());
	static db_palm = new Symbole('double palme croisée de lauriers', SymboleData._idGen.getId());
	static lg_palm = new Symbole('large palme', SymboleData._idGen.getId());
	static zero = new Symbole('zero', SymboleData._idGen.getId());


	static cochon = new Symbole('cochon', SymboleData._idGen.getId());
	static squelette = new Symbole('squelette', SymboleData._idGen.getId());
	static squelette_diamant = new Symbole('squelette pointe de diamant', SymboleData._idGen.getId());
	static squelette_rubis = new Symbole('squelette pointe de rubis', SymboleData._idGen.getId());
	static chameau = new Symbole('chameau', SymboleData._idGen.getId(), 'est en fait un dromadaire');
	static rose = new Symbole('bouton de rose', SymboleData._idGen.getId());
	static f_vigne = new Symbole('feuille de vigne', SymboleData._idGen.getId());
	static tete_vache = new Symbole('tête de vache', SymboleData._idGen.getId());
	static tete_taureau = new Symbole('tête de taureau', SymboleData._idGen.getId());
	static fraise = new Symbole('fraise', SymboleData._idGen.getId());
	static cupidon = new Symbole('cupidon', SymboleData._idGen.getId());
	static pendu = new Symbole('pendu', SymboleData._idGen.getId());
	static potence = new Symbole('potence', SymboleData._idGen.getId(), 'pendu auquel on enlève le personnage');
	static nounours = new Symbole('nounours', SymboleData._idGen.getId());
	static fer_cheval = new Symbole('fer à cheval', SymboleData._idGen.getId());
	static chouette = new Symbole('chouette', SymboleData._idGen.getId());
	static entonoire = new Symbole('entonoire', SymboleData._idGen.getId());
	static fourchette = new Symbole('fouchette', SymboleData._idGen.getId());
	static ancre = new Symbole('ancre', SymboleData._idGen.getId());
	static voilier = new Symbole('voilier', SymboleData._idGen.getId());
	static lyre = new Symbole('lyre', SymboleData._idGen.getId());
	static quille = new Symbole('la quille', SymboleData._idGen.getId());
	static ski = new Symbole('ski', SymboleData._idGen.getId());
	static roue_cr = new Symbole('roue crantée', SymboleData._idGen.getId());
	static app_photo = new Symbole('appareil photo', SymboleData._idGen.getId());
	static aigle = new Symbole('aigle', SymboleData._idGen.getId());
	static epervier = new Symbole('epervier', SymboleData._idGen.getId());
	static chop_biere = new Symbole('choppe de bière', SymboleData._idGen.getId());
	static coc_papier = new Symbole('cocotte en papier', SymboleData._idGen.getId());
	static bacchus = new Symbole('bacchus', SymboleData._idGen.getId());
	static bacchus_troue = new Symbole('bacchus troué', SymboleData._idGen.getId(), "bacchus dans lequel on fait un trou");
	static anneau_ol = new Symbole('anneaux olypiques', SymboleData._idGen.getId());
	static cle_sol = new Symbole('clé de sol', SymboleData._idGen.getId());
	static abeille = new Symbole('abeille', SymboleData._idGen.getId());
	static mamouth = new Symbole('mamouth', SymboleData._idGen.getId());
	static epi_fauci = new Symbole('épi de blé croisé faucille', SymboleData._idGen.getId());
	static chauve_souris = new Symbole('chauve-souris', SymboleData._idGen.getId());
	static parapluie = new Symbole('parapluie', SymboleData._idGen.getId());
	static parapluie_ouvert = new Symbole('parapluie ouvert', SymboleData._idGen.getId());
	static hache = new Symbole('hache', SymboleData._idGen.getId());
	static pelotte = new Symbole('pelotte de laine', SymboleData._idGen.getId());
	static volant = new Symbole('volant', SymboleData._idGen.getId());
	static poule = new Symbole('poule', SymboleData._idGen.getId());
	static cor_chasse = new Symbole('cor de chasse', SymboleData._idGen.getId());
	static fleche = new Symbole('flèche', SymboleData._idGen.getId());
	static pensee = new Symbole('pensée', SymboleData._idGen.getId());
	static epee = new Symbole('épée', SymboleData._idGen.getId());
	static lime = new Symbole('lime', SymboleData._idGen.getId());
	static etoile = new Symbole('étoile', SymboleData._idGen.getId());
	static etoile_de_mer = new Symbole('étoile de mer', SymboleData._idGen.getId());
	static bout_bordeaux = new Symbole('bouteille de bordeaux', SymboleData._idGen.getId());
	static bout_champ = new Symbole('bouteille de champagne', SymboleData._idGen.getId());
	static sou_troue = new Symbole('Sou troué', SymboleData._idGen.getId());
	static epi_ble = new Symbole('épi de blé', SymboleData._idGen.getId());
	static singe = new Symbole('singe', SymboleData._idGen.getId());
	static pachyderme = new Symbole('pachyderme', SymboleData._idGen.getId());
	static porteavion = new Symbole('porte-avion', SymboleData._idGen.getId());
	static ane = new Symbole('âne', SymboleData._idGen.getId());
	static chardon = new Symbole('chardon', SymboleData._idGen.getId());
	static cigale = new Symbole('cigale', SymboleData._idGen.getId());
	static cigogne = new Symbole('cigogne', SymboleData._idGen.getId());
	static escargot = new Symbole('escargot', SymboleData._idGen.getId());
	static hermine = new Symbole('hermine', SymboleData._idGen.getId());
	static houe = new Symbole('houe', SymboleData._idGen.getId());
	static lion_hera = new Symbole('lion héraldique', SymboleData._idGen.getId());
	static lion_couch = new Symbole('lion couché', SymboleData._idGen.getId());
	static poire = new Symbole('poire', SymboleData._idGen.getId());
	static sabot = new Symbole('sabot', SymboleData._idGen.getId());
	static sanglier = new Symbole('sanglier', SymboleData._idGen.getId());
	static tastevin = new Symbole('taste-vin', SymboleData._idGen.getId());
	static boulepetanque = new Symbole('boule de pétanque', SymboleData._idGen.getId());
	static faux = new Symbole('la faux', SymboleData._idGen.getId());

	static phi = new Symbole('phi', SymboleData._idGen.getId());
	static psy = new Symbole('psy', SymboleData._idGen.getId());
	static epsilon = new Symbole('epsilon', SymboleData._idGen.getId());
	static phiepsilon = new Symbole('phi - epsilon', SymboleData._idGen.getId());

	static ballon = new Symbole('ballon', SymboleData._idGen.getId());
	static ecureil = new Symbole('ecureil', SymboleData._idGen.getId());
	static fleurlys = new Symbole('fleur de lys', SymboleData._idGen.getId());
	static flyingpenis = new Symbole('flying penis', SymboleData._idGen.getId());
	static flyingvagin = new Symbole('flying vagin', SymboleData._idGen.getId());
	static geronimo = new Symbole('geronimo', SymboleData._idGen.getId());
	static hommard = new Symbole('hommard', SymboleData._idGen.getId());
	static marteaumaillet = new Symbole('marteau et maillet', SymboleData._idGen.getId());
	static trousseauclefs = new Symbole('trousseaux de clefs', SymboleData._idGen.getId());




}
import { LinkModel } from '../../types';
import { PlacementData } from '../../items/placement-data';
import { PositionData } from '../../items/position-data';
import { filieresData } from '../../items/filieres-data';
import { SymboleData } from '../../items/symbole-data';
import { CirculaireData } from '../../items/circulaires-data';
import { SignificationsData } from '../../items/signification-data';



export class DataLinks {


	static links: LinkModel[] = [
		// filieres
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.medecine.id,
			symboleid: SymboleData.caduc_medecine.id,
			circulaireid: CirculaireData.velours_rouge.id
		},


		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.infirmer.id,
			symboleid: SymboleData.caduc_infirmier.id,
			circulaireid: CirculaireData.velours_rose.id
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.infirmer.id,
			symboleid: SymboleData.ciseaux.id,
			circulaireid: CirculaireData.velours_rose.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.pharmacie.id,
			symboleid: SymboleData.caduc_pharmacie.id,
			circulaireid: CirculaireData.velours_vert.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.prepa_pharmacie.id,
			symboleid: SymboleData.mortier_pilon.id,
			circulaireid: CirculaireData.velours_vert.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.dentaire.id,
			symboleid: SymboleData.molaire.id,
			circulaireid: CirculaireData.velours_violet.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.veterinaire.id,
			symboleid: SymboleData.tete_cheval.id,
			circulaireid: CirculaireData.velours_bordeaux.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.sagefemme.id,
			symboleid: SymboleData.croix_ankh.id,
			circulaireid: CirculaireData.velours_fushia.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.paramed.id,
			symboleid: SymboleData.ciseaux.id,
			circulaireid: CirculaireData.velours_rose.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.kine.id,
			symboleid: SymboleData.caduc_mercure.id,
			circulaireid: CirculaireData.velours_rose.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.ergo.id,
			symboleid: SymboleData.ciseaux.id,
			circulaireid: CirculaireData.velours_rose.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.osteo.id,
			symboleid: SymboleData.sphenoid.id,
			circulaireid: CirculaireData.velours_bleu_roy.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.paces.id,
			symboleid: SymboleData.tete_mort_fem.id,
			circulaireid: CirculaireData.velours_marron.id
		},


		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.droit.id,
			symboleid: SymboleData.balance_et_glaive.id,
			circulaireid: CirculaireData.satin_rouge.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.seg.id,
			symboleid: SymboleData.caduc_mercure.id,
			circulaireid: CirculaireData.satin_orange.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.iae.id,
			symboleid: SymboleData.ltriae.id,
			circulaireid: CirculaireData.satin_orange.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.tourismes.id,
			symboleid: SymboleData.soleil.id,
			circulaireid: CirculaireData.satin_orange.id,
			spe: true
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.ingemedia.id,
			symboleid: SymboleData.caduc_mercure.id,
			circulaireid: CirculaireData.satin_jaune.id,
			spe: true
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.lsh.id,
			symboleid: SymboleData.livre_plume.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.geog.id,
			symboleid: SymboleData.globe.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.histoire.id,
			symboleid: SymboleData.casque_pericles.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.lea.id,
			symboleid: SymboleData.ltrlea.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.philo.id,
			symboleid: SymboleData.phi.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.socio.id,
			symboleid: SymboleData.grenouille.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.archeo.id,
			symboleid: SymboleData.tete_sphinx.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.ethno.id,
			symboleid: SymboleData.livre_plume.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.hist_art.id,
			symboleid: SymboleData.palette_pinceaux.id,
			circulaireid: CirculaireData.satin_jaune.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.architect.id,
			symboleid: SymboleData.equerre_compa.id,
			circulaireid: CirculaireData.satin_bleu.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.cinema.id,
			symboleid: SymboleData.clap_cinema.id,
			circulaireid: CirculaireData.satin_bleu.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.theatre.id,
			symboleid: SymboleData.masque_comedie.id,
			circulaireid: CirculaireData.satin_bleu.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.numerique.id,
			symboleid: SymboleData.arobase.id,
			circulaireid: CirculaireData.satin_bleu.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.iutbts.id,
			symboleid: SymboleData.ltruitbts.id,
			circulaireid: CirculaireData.satin_blanc.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.sciences.id,
			symboleid: SymboleData.palme_science.id,
			circulaireid: CirculaireData.satin_violet.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.oenologie.id,
			symboleid: SymboleData.grappe_raisin.id,
			circulaireid: CirculaireData.satin_rose_saumon.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.staps.id,
			symboleid: SymboleData.coq.id,
			circulaireid: CirculaireData.satin_vert.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.aes.id,
			symboleid: SymboleData.ltraes.id,
			circulaireid: CirculaireData.satin_vert_pomme.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.prepa.id,
			symboleid: SymboleData.chouette_bicephale.id,
			circulaireid: CirculaireData.satin_marron.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.musicologie.id,
			symboleid: SymboleData.lyre.id,
			circulaireid: CirculaireData.satin_argente.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.espe.id,
			symboleid: SymboleData.ltrespe.id,
			circulaireid: CirculaireData.satin_gris.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.theologie.id,
			symboleid: SymboleData.ltrth.id,
			circulaireid: CirculaireData.satin_rouge_et_blanc.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.notariat.id,
			symboleid: SymboleData.balance_et_glaive.id,
			circulaireid: CirculaireData.satin_rouge_et_noir.id
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.politique.id,
			symboleid: SymboleData.parapluie.id,
			circulaireid: CirculaireData.satin_bleu_et_rouge.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.commerce.id,
			symboleid: SymboleData.caduc_mercure.id,
			circulaireid: CirculaireData.satin_vert_et_rouge.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.psy.id,
			symboleid: SymboleData.psy.id,
			circulaireid: CirculaireData.satin_jaune_liseret_violet.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.inge.id,
			symboleid: SymboleData.etoile_et_foudre.id,
			circulaireid: CirculaireData.satin_bleu_et_noir.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.militaire.id,
			symboleid: SymboleData.ltrecolmilit.id,
			circulaireid: CirculaireData.satin_vert_et_marron.id,
			spe: true
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.agricole.id,
			symboleid: SymboleData.tete_vache_epi_ble.id,
			circulaireid: CirculaireData.satin_moiret_vert.id
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.agroalim.id,
			symboleid: SymboleData.epi_ble_fourchette.id,
			circulaireid: CirculaireData.satin_bleu_et_jaune.id
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.surcirculaire.id,
			filiereid: filieresData.beauart.id,
			symboleid: SymboleData.palette_pinceaux.id,
			circulaireid: CirculaireData.satin_bleu.id
		},
		//autre
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cochon.id,
			significationid: SignificationsData.a_integ.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cochon.id,
			significationid: SignificationsData.a_ete_integ.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.cochon.id,
			significationid: SignificationsData.a_integ.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.cochon.id,
			significationid: SignificationsData.a_ete_integ.id,
		},



		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.squelette.id,
			significationid: SignificationsData.am_anatom_sex_opo.id,
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.squelette.id,
			significationid: SignificationsData.am_anatom_sex_opo.id,
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.squelette.id,
			significationid: SignificationsData.am_anatom.id,
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.squelette.id,
			significationid: SignificationsData.am_anatom.id,
			note: 'ancien natio du 118 au 130',
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.squelette_diamant.id,
			significationid: SignificationsData.gay.id,
			note: 'ancien natio du 118 au 130',
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.squelette_rubis.id,
			significationid: SignificationsData.bi.id,
			note: 'ancien natio du 118 au 130',
			spe: true

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_couple.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_couple.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_celib.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_celib.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_complique.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.travers.id,
			symboleid: SymboleData.chameau.id,
			significationid: SignificationsData.stat_complique.id,

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.f_vigne.id,
			significationid: SignificationsData.perte_virg_masc.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.rose.id,
			significationid: SignificationsData.perte_virg_fem.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tete_vache.id,
			significationid: SignificationsData.genitrice_g.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.rubanbleu.id,
			symboleid: SymboleData.tete_vache.id,
			significationid: SignificationsData.genitrice_g.id,

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tete_vache.id,
			significationid: SignificationsData.genitrice_f.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.rubanrose.id,
			symboleid: SymboleData.tete_vache.id,
			significationid: SignificationsData.genitrice_f.id,

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tete_taureau.id,
			significationid: SignificationsData.geniteur_g.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.rubanbleu.id,
			symboleid: SymboleData.tete_taureau.id,
			significationid: SignificationsData.geniteur_g.id,

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tete_taureau.id,
			significationid: SignificationsData.geniteur_f.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.rubanrose.id,
			symboleid: SymboleData.tete_taureau.id,
			significationid: SignificationsData.geniteur_f.id,

		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fraise.id,
			significationid: SignificationsData.enceinte.id,

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cupidon.id,
			significationid: SignificationsData.fiance.id,
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cupidon.id,
			significationid: SignificationsData.fiance.id,
			spe: true

		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.pendu.id,
			significationid: SignificationsData.marie.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.potence.id,
			significationid: SignificationsData.divorce.id,
		},


		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.nounours.id,
			significationid: SignificationsData.dormeur.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.nounours.id,
			significationid: SignificationsData.dormeur.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.nounours.id,
			significationid: SignificationsData.insomniac.id,
			spe: true
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.nounours.id,
			significationid: SignificationsData.insomniac.id,
			spe: true
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.rubancoularme.id,
			symboleid: SymboleData.quille.id,
			significationid: SignificationsData.reserviste.id,
			spe: true
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.globe.id,
			significationid: SignificationsData.globetrotteur.id,
		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fer_cheval.id,
			significationid: SignificationsData.chanceux.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.fer_cheval.id,
			significationid: SignificationsData.chanceux.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fer_cheval.id,
			significationid: SignificationsData.malchanceux.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.fer_cheval.id,
			significationid: SignificationsData.malchanceux.id,
		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chouette.id,
			significationid: SignificationsData.oiseau_de_nuit.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.entonoire.id,
			significationid: SignificationsData.buveur_o.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.grappe_raisin.id,
			significationid: SignificationsData.am_vin.id,
		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fourchette.id,
			significationid: SignificationsData.am_table.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.seul.id,
			symboleid: SymboleData.fourchette.id,
			significationid: SignificationsData.am_table.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fourchette.id,
			significationid: SignificationsData.cord_bleu.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.rubanbleu.id,
			symboleid: SymboleData.fourchette.id,
			significationid: SignificationsData.cord_bleu.id,
		},

		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.ancre.id,
			significationid: SignificationsData.am_nav.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.lyre.id,
			significationid: SignificationsData.am_mus.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.palette_pinceaux.id,
			significationid: SignificationsData.am_peint.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.plume.id,
			significationid: SignificationsData.am_lit.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.ski.id,
			significationid: SignificationsData.am_ski.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.etoile_et_foudre.id,
			significationid: SignificationsData.am_tech.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.roue_cr.id,
			significationid: SignificationsData.am_mec.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.boulepetanque.id,
			significationid: SignificationsData.am_peta.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.voilier.id,
			significationid: SignificationsData.am_mer.id
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.app_photo.id,
			significationid: SignificationsData.am_photo.id,
			spe: true
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.aigle.id,
			significationid: SignificationsData.am_avia.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.aigle.id,
			significationid: SignificationsData.pilote.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chop_biere.id,
			significationid: SignificationsData.am_biere.id,
			note: 'A ne pas confondre avec l\'ordre des chevalier du Gambrinus'
		},
		{
			placementId: PlacementData.offert.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.ciseaux.id,
			significationid: SignificationsData.cousu_fal.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.coq.id,
			significationid: SignificationsData.gd_gueule.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.coc_papier.id,
			significationid: SignificationsData.gd_sech.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.bacchus.id,
			significationid: SignificationsData.dig_ivres.id,
		},
		{
			placementId: PlacementData.libre.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.bacchus_troue.id,
			significationid: SignificationsData.absteme.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.anneau_ol.id,
			significationid: SignificationsData.ex_sport.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cle_sol.id,
			significationid: SignificationsData.dig_chant.id,
		},


		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.surcirculaire.id,
			symboleid: SymboleData.abeille.id,
			significationid: SignificationsData.parkour.id,
		},
		{
			placementId: PlacementData.decerne_asso.id,
			positionId: PositionData.rubanasso.id,
			symboleid: SymboleData.abeille.id,
			significationid: SignificationsData.assos.id,
		},
		{
			placementId: PlacementData.decerne_anciens.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.mamouth.id,
			significationid: SignificationsData.gard_tradition.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.epi_fauci.id,
			significationid: SignificationsData.chance_exam.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chauve_souris.id,
			significationid: SignificationsData.nuit_bl.id,
		},


		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.parapluie.id,
			significationid: SignificationsData.vomit_sur_fal.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.aendroit.id,
			symboleid: SymboleData.parapluie.id,
			significationid: SignificationsData.vomit_sur_fal.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.parapluie.id,
			significationid: SignificationsData.vomit_ds_fal.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.aenvers.id,
			symboleid: SymboleData.parapluie.id,
			significationid: SignificationsData.vomit_ds_fal.id,
		},

		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.parapluie_ouvert.id,
			significationid: SignificationsData.vomit_ds_fal_rm.id,
		},

		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.hache.id,
			significationid: SignificationsData.prise_guerre.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.pelotte.id,
			significationid: SignificationsData.papymamy.id,
			spe: true
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.volant.id,
			significationid: SignificationsData.sam.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tete_sphinx.id,
			significationid: SignificationsData.polyglotte.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.poule.id,
			significationid: SignificationsData.pers_chaude.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cor_chasse.id,
			significationid: SignificationsData.gd_chasseur.id
		},
		{
			placementId: PlacementData.decerne_part.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.fleche.id,
			significationid: SignificationsData.ejac_prec.id
		},
		{
			placementId: PlacementData.decerne_part.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.pensee.id,
			significationid: SignificationsData.expert.id
		},
		{
			placementId: PlacementData.decerne_part.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.epee.id,
			significationid: SignificationsData.fin_bais.id
		},
		{
			placementId: PlacementData.decerne_part.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.lime.id,
			significationid: SignificationsData.act_long.id
		},
		{
			placementId: PlacementData.decerne_part.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.etoile_de_mer.id,
			significationid: SignificationsData.inactif.id,
			spe: true
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.bout_bordeaux.id,
			significationid: SignificationsData.cuite.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.bout_champ.id,
			significationid: SignificationsData.coma.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.sou_troue.id,
			significationid: SignificationsData.nuit_poste.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.epi_ble.id,
			significationid: SignificationsData.radin.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.singe.id,
			significationid: SignificationsData.quemandeur.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.singe.id,
			significationid: SignificationsData.quemandeur.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.pachyderme.id,
			significationid: SignificationsData.lourdeur.id
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.porteavion.id,
			significationid: SignificationsData.lourdeur_ext.id,
			spe: true
		},

		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.ane.id,
			significationid: SignificationsData.ori_berry.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.chardon.id,
			significationid: SignificationsData.ori_lorrain.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cigale.id,
			significationid: SignificationsData.ori_provence.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.cigogne.id,
			significationid: SignificationsData.ori_alsace.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.escargot.id,
			significationid: SignificationsData.ori_bourg.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.hermine.id,
			significationid: SignificationsData.ori_bret.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.houe.id,
			significationid: SignificationsData.ori_limousin.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.lion_hera.id,
			significationid: SignificationsData.ori_normand.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.lion_couch.id,
			significationid: SignificationsData.ori_lyon.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.sabot.id,
			significationid: SignificationsData.etu_bret_paris.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.sanglier.id,
			significationid: SignificationsData.ori_ard.id,
		},
		{
			placementId: PlacementData.libre_cond.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.tastevin.id,
			significationid: SignificationsData.ori_dij.id,
		},
		{
			placementId: PlacementData.decerne.id,
			positionId: PositionData.survelours.id,
			symboleid: SymboleData.faux.id,
			significationid: SignificationsData.trepas.id
		},
	];

}

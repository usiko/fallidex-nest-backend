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
            circulaireid: CirculaireData.satin_vert_fonce.id
        },

        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.aes.id,
            symboleid: SymboleData.ltraes.id,
            circulaireid: CirculaireData.satin_vert_clair.id
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
            filiereid: filieresData.theologie.id,
            symboleid: SymboleData.ltrth.id,
            circulaireid: CirculaireData.satin_rouge_et_blanc.id
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
            filiereid: filieresData.beauart.id,
            symboleid: SymboleData.palette_pinceaux.id,
            circulaireid: CirculaireData.satin_bleu.id
        },

        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.communication.id,
            symboleid: SymboleData.caduc_mercure.id,
            circulaireid: CirculaireData.satin_coul_ufr.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.espe.id,
            symboleid: SymboleData.ltrespe.id,
            circulaireid: CirculaireData.satin_coul_disp.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.second_degrés.id,
            symboleid: SymboleData.ltrespe.id,
            circulaireid: CirculaireData.satin_coul_disp.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.iup.id,
            symboleid: SymboleData.ltriup.id,
            circulaireid: CirculaireData.satin_coul_disp.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.miashs.id,
            symboleid: SymboleData.ltrmiashs.id,
            circulaireid: CirculaireData.satin_coul_disp.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.social.id,
            symboleid: SymboleData.ltrfil.id,
            circulaireid: CirculaireData.satin_jaune.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.langue.id,
            symboleid: SymboleData.livre_plume.id,
            circulaireid: CirculaireData.satin_jaune.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.journalisme.id,
            symboleid: SymboleData.caduc_mercure.id,
            circulaireid: CirculaireData.satin_vert_et_rouge.id
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.surcirculaire.id,
            filiereid: filieresData.gestion.id,
            symboleid: SymboleData.caduc_mercure.id,
            circulaireid: CirculaireData.satin_vert_et_rouge.id
        },

        // autre
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
            significationid: SignificationsData.na_ete_integ.id,
        },
        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.aenvers.id,
            symboleid: SymboleData.cochon.id,
            significationid: SignificationsData.na_ete_integ.id,
        },
        {
            placementId: PlacementData.libre_cond.id,
            positionId: PositionData.survelours.id,
            significationid: SignificationsData.absteme.id,
            symboleid: SymboleData.bacchus_troue.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            significationid: SignificationsData.dig_ivres.id,
            symboleid: SymboleData.bacchus.id
        },

        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.chameau.id,
            significationid: SignificationsData.stat_coeur_pris.id,

        },
        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.aendroit.id,
            symboleid: SymboleData.chameau.id,
            significationid: SignificationsData.stat_coeur_pris.id,

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
            symboleid: SymboleData.chop_biere.id,
            significationid: SignificationsData.am_biere.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.epi_ble.id,
            significationid: SignificationsData.radin.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.epi_fauci.id,
            significationid: SignificationsData.chance_exam.id,
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
            symboleid: SymboleData.plume.id,
            significationid: SignificationsData.am_lit.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.tete_sphinx.id,
            significationid: SignificationsData.polyglotte.id
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
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.anneau_ol.id,
            significationid: SignificationsData.ex_sport.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.bout_bordeaux.id,
            significationid: SignificationsData.cuite.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.bout_champ.id,
            significationid: SignificationsData.coma.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.hache.id,
            significationid: SignificationsData.prise_guerre.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.mamouth.id,
            significationid: SignificationsData.gard_tradition.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.pachyderme.id,
            significationid: SignificationsData.lourdeur.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.poule.id,
            significationid: SignificationsData.pers_chaude.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.volant.id,
            significationid: SignificationsData.sam.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.sou_troue.id,
            significationid: SignificationsData.nuit_poste.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.singe.id,
            significationid: SignificationsData.quemandeur.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.cor_chasse.id,
            significationid: SignificationsData.gd_chasseur.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.coq.id,
            significationid: SignificationsData.gd_gueule.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.chouette.id,
            significationid: SignificationsData.oiseau_de_nuit.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.faux.id,
            significationid: SignificationsData.trepas.id
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.surcirculaire.id,
            symboleid: SymboleData.abeille.id,
            significationid: SignificationsData.parkour.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.rubanasso.id,
            symboleid: SymboleData.abeille.id,
            significationid: SignificationsData.assos.id,
        },
        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.surcirculaire.id,
            symboleid: SymboleData.quille.id,
            significationid: SignificationsData.serv_militaire.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.fourchette.id,
            significationid: SignificationsData.cord_bleu.id,
        },
        {
            placementId: PlacementData.decerne_gm.id,
            positionId: PositionData.rubanbleu.id,
            symboleid: SymboleData.fourchette.id,
            significationid: SignificationsData.cord_bleu.id,
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
            placementId: PlacementData.libre.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.lyre.id,
            significationid: SignificationsData.am_mus.id,
        },
        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.palette_vernie.id,
            significationid: SignificationsData.am_art_plastique.id,
        },
        {
            placementId: PlacementData.libre.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.masque_comedie.id,
            significationid: SignificationsData.am_scene_cine.id,
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
            symboleid: SymboleData.fer_cheval.id,
            significationid: SignificationsData.chanceux.id,
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
            symboleid: SymboleData.plume.id,
            significationid: SignificationsData.am_lit.id,
        },
        {
            placementId: PlacementData.decerne.id,
            positionId: PositionData.survelours.id,
            symboleid: SymboleData.cle_sol.id,
            significationid: SignificationsData.dig_chant.id,
        },



    ]

}

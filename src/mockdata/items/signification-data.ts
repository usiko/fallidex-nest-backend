
import { Signification } from 'src/app/models/models';
import { DataItem } from '../types';
import { idGetter } from '../id-getter';


export class SignificationsData extends DataItem {
    private static _idGen = new idGetter('signification');

    static a_integ = new Signification('a intégré', SignificationsData._idGen.getId());
    static a_ete_integ = new Signification('a été intégré', SignificationsData._idGen.getId());
    static na_ete_integ = new Signification('n\'a pas été intégré', SignificationsData._idGen.getId());

    static am_anatom = new Signification('amour de l’anatomie en tant que matière', SignificationsData._idGen.getId());
    static am_anatom_sex_opo = new Signification('amour du sexe opposé', SignificationsData._idGen.getId());
    static gay = new Signification('amour du même sexe', SignificationsData._idGen.getId());
    static bi = new Signification('amour des deux sexes', SignificationsData._idGen.getId());

    static stat_celib = new Signification('célibataire', SignificationsData._idGen.getId());
    static stat_complique = new Signification('c\'est compliqué', SignificationsData._idGen.getId());
    static stat_couple = new Signification('en couple (si le ou la partenaire est faluchard, sur ruban au couleur du circulaire du partenaire)', SignificationsData._idGen.getId());
    static stat_coeur_pris = new Signification('Cœur pris dans l’antichambre du mariage (si le ou la partenaire est faluchard, sur ruban au couleur du circulaire du partenaire)', SignificationsData._idGen.getId());

    static perte_virg_masc = new Signification('perte de la virginité masculine', SignificationsData._idGen.getId());
    static perte_virg_fem = new Signification('perte de la virginité feminine', SignificationsData._idGen.getId());

    static geniteur_g = new Signification('géniteur d\'un garçon', SignificationsData._idGen.getId());
    static geniteur_f = new Signification('géniteur d\'une fille', SignificationsData._idGen.getId());
    static genitrice_g = new Signification('génitrice d\'un garçon', SignificationsData._idGen.getId());
    static genitrice_f = new Signification('génitrice d\'une fille', SignificationsData._idGen.getId());

    static enceinte = new Signification('femme enceinte', SignificationsData._idGen.getId());

    static fiance = new Signification('fiancé ou pacsé', SignificationsData._idGen.getId());

    static marie = new Signification('marié', SignificationsData._idGen.getId());

    static divorce = new Signification('divorcé', SignificationsData._idGen.getId());

    static dormeur = new Signification('gros dormeur', SignificationsData._idGen.getId());

    static insomniac = new Signification('insomniaque', SignificationsData._idGen.getId());

    static reserviste = new Signification('réservite ou militaire', SignificationsData._idGen.getId());
    static serv_militaire = new Signification('pends à l\'endroit du cursus où aura été effectué le service militaire ou service civique.', SignificationsData._idGen.getId());

    static chanceux = new Signification('chanceux', SignificationsData._idGen.getId());
    static malchanceux = new Signification('malchanceux', SignificationsData._idGen.getId());

    static globetrotteur = new Signification('globetrotteur', SignificationsData._idGen.getId());

    static oiseau_de_nuit = new Signification('oiseau de nuit', SignificationsData._idGen.getId());

    static buveur_o = new Signification('buveau d\'eau', SignificationsData._idGen.getId());
    static ex_sport = new Signification('excellence universitaire sportive', SignificationsData._idGen.getId());

    static am_vin = new Signification('amour du bon vin', SignificationsData._idGen.getId());
    static am_table = new Signification('amour des plaisirs de la table', SignificationsData._idGen.getId());
    static am_nav = new Signification('amour de la navigation', SignificationsData._idGen.getId());
    static am_mus = new Signification('amour de la musique', SignificationsData._idGen.getId());
    static am_lit = new Signification('amour de la littérature', SignificationsData._idGen.getId());
    static am_ski = new Signification('amour de la montagne', SignificationsData._idGen.getId());
    static am_tech = new Signification('amour de l\'informatique et des nouvelles technologies', SignificationsData._idGen.getId());
    static am_mec = new Signification('amour de mécanique', SignificationsData._idGen.getId());
    static am_peta = new Signification('amour de la pétanque', SignificationsData._idGen.getId());
    static am_mer = new Signification('amour des plaisirs de la mer', SignificationsData._idGen.getId());
    static am_photo = new Signification('amour de la photographie', SignificationsData._idGen.getId());
    static am_avia = new Signification('amour de l`aviation', SignificationsData._idGen.getId());
    static am_biere = new Signification('amour de la bonne bière', SignificationsData._idGen.getId());
    static am_peint = new Signification('amour de la peinture', SignificationsData._idGen.getId());
    static am_art_plastique = new Signification('amour des arts plastiques', SignificationsData._idGen.getId());
    static am_scene_cine = new Signification('amour de la scène et du cinema', SignificationsData._idGen.getId());
    static cousu_fal = new Signification('à cousu une autre faluches que la sienne, rubans sur la faluche ou faluche entière (si plusieurs, croiser insigne, ou exposant le nombre de faluche cousues)', SignificationsData._idGen.getId());

    static pilote = new Signification('brevet de pilote', SignificationsData._idGen.getId());
    static gd_gueule = new Signification('grande gueule sachant l`ouvrir', SignificationsData._idGen.getId());
    static gd_sech = new Signification('grande sécheur devant l`éternel', SignificationsData._idGen.getId());
    static dig_ivres = new Signification('dignité dans l`ivresse', SignificationsData._idGen.getId());
    static absteme = new Signification('personne abstème (ne boit pas d`alcool)', SignificationsData._idGen.getId());
    static cord_bleu = new Signification('cordon bleu', SignificationsData._idGen.getId());
    static dig_chant = new Signification('digne chanteur de paillardes', SignificationsData._idGen.getId());
    static gard_tradition = new Signification('gardien des traditions et respect des anciens', SignificationsData._idGen.getId());

    static parkour = new Signification('parcours exemplaire', SignificationsData._idGen.getId());
    static assos = new Signification('travail et minutie dans l`associatif', SignificationsData._idGen.getId());

    static chance_exam = new Signification('chanceux aux examens', SignificationsData._idGen.getId());
    static nuit_bl = new Signification('nuit blance pour motif estudiantin', SignificationsData._idGen.getId());

    static vomit_sur_fal = new Signification('à vomit sur sa faluche', SignificationsData._idGen.getId());
    static vomit_ds_fal = new Signification('à vomit dans sa faluche', SignificationsData._idGen.getId());
    static vomit_ds_fal_rm = new Signification('à vomit dans sa faluche et la remis sur la tête', SignificationsData._idGen.getId());

    static prise_guerre = new Signification('prise de guerre (à ne pas confondre avec le vandalisme)', SignificationsData._idGen.getId());
    static papymamy = new Signification('papi mami (mode de vie)', SignificationsData._idGen.getId());
    static sam = new Signification('accompagnateur de fin de soirée (SAM)', SignificationsData._idGen.getId());
    static polyglotte = new Signification('polyglotte (au moins 3 langues parlée courament, langue des signe incluse)', SignificationsData._idGen.getId());
    static pers_chaude = new Signification('personne chaude', SignificationsData._idGen.getId());
    static gd_chasseur = new Signification('grand chasseur devant l`éternel', SignificationsData._idGen.getId());
    static ejac_prec = new Signification('éjaculateur précoce', SignificationsData._idGen.getId());
    static expert = new Signification('experte', SignificationsData._idGen.getId());
    static fin_bais = new Signification('fin baiseur', SignificationsData._idGen.getId());
    static act_long = new Signification('acte long et/ou laborieux et difficile', SignificationsData._idGen.getId());
    static inactif = new Signification('étoile de mer ou inactif', SignificationsData._idGen.getId());
    static cuite = new Signification('cuite certifiée (possible coéfficient multiplicateur)', SignificationsData._idGen.getId(), true);
    static coma = new Signification('coma éthylique certifié', SignificationsData._idGen.getId(), true);
    static nuit_poste = new Signification('nuit passé au poste pour motif estudiantin', SignificationsData._idGen.getId(), true);
    static radin = new Signification('radin', SignificationsData._idGen.getId(), true);
    static quemandeur = new Signification('quémandeur d`insigne (gèle de fal: empêche de recevoir tout autre insigne et d`être pm)', SignificationsData._idGen.getId(), true);
    static lourdeur_ext = new Signification('extrême lourdeur (gèle de fal: empêche de recevoir tout autre insigne et d`être pm)', SignificationsData._idGen.getId(), true);
    static lourdeur = new Signification('personne lourde', SignificationsData._idGen.getId(), true);
    static ori_berry = new Signification('originaire du Berry (porté par les faluchards Berrichons', SignificationsData._idGen.getId());
    static ori_lorrain = new Signification('lorrain', SignificationsData._idGen.getId());
    static ori_provence = new Signification('né en provence (n\'existe pas à Marseille)', SignificationsData._idGen.getId());
    static ori_alsace = new Signification('alsacien', SignificationsData._idGen.getId());
    static ori_bourg = new Signification('bourguignon', SignificationsData._idGen.getId());
    static ori_bret = new Signification('breton', SignificationsData._idGen.getId());
    static ori_limousin = new Signification('limousin', SignificationsData._idGen.getId());
    static ori_normand = new Signification('normand', SignificationsData._idGen.getId());
    static ori_lyon = new Signification('lyonnais', SignificationsData._idGen.getId());
    static ori_orlea = new Signification('orléannais', SignificationsData._idGen.getId());
    static etu_bret_paris = new Signification('étudiant breton parti étudier à Paris', SignificationsData._idGen.getId());
    static ori_ard = new Signification('ardennais', SignificationsData._idGen.getId());
    static ori_dij = new Signification('Faluchard dijonnais', SignificationsData._idGen.getId());

    static cons_ufr = new Signification('un insigne par année d\'élection (ou par mandat) au conseil d\'UFR', SignificationsData._idGen.getId());
    static cons_univ = new Signification('un insigne par année d\'élection (ou par mandat) au conseil d\'université', SignificationsData._idGen.getId());
    static elu_crous = new Signification('élus au CROUS', SignificationsData._idGen.getId());
    static elu_cnous = new Signification('élus au CNOUS', SignificationsData._idGen.getId());
    static vp_etudiant = new Signification('vp étudiant d\'UFR ou de CA d\'IUT', SignificationsData._idGen.getId());
    static deleg_mut = new Signification('un insigne par mandat de délégués mutualistes (sur un petit ruban bleu)', SignificationsData._idGen.getId());

    static an_com = new Signification(
        'un insigne par année d\'études (se place en début d\'année, la première étoile sera placée sur un moivre disposé de biais, de couleur bleue pour les facultés ou établissements d\'état, blanche pour les facultés catholiques, écoles ou instituts privés) '
        , SignificationsData._idGen.getId());
    static an_red = new Signification('pour les années redoublées  ', SignificationsData._idGen.getId());
    static fin_cycle = new Signification('se place à la fin de chaque cycle (s\'il n\'y a pas de diplôme correspondant) ', SignificationsData._idGen.getId());
    static diplome = new Signification('pour chaque diplôme obtenu (DEUG, DUT, BTS, Licence Maîtrise, diplôme universitaire, diplôme d\'état, ...) ', SignificationsData._idGen.getId());
    static ratrapage = new Signification('a coté de l\'étoile de l\'année pour tout échec aux examens de la première session et réussite à la session de rattrapage.', SignificationsData._idGen.getId());
    static abandon = new Signification('pour abandon d’une discipline (encore échecs aux examens de rattrapage dans certaines villes)', SignificationsData._idGen.getId());
    static trepas = new Signification('pour tout passage de vie a trepas dans le cadre de ses fonctions', SignificationsData._idGen.getId());

}
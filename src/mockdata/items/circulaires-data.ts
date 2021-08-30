

import { CiculaireMatiereEnum, Circulaire } from 'src/models/models';
import { idGetter } from '../id-getter';
import { DataItem } from '../types';
import { DataCouleur } from './colors-data';






const velours = CiculaireMatiereEnum.velours;
const satin = CiculaireMatiereEnum.satin;
export class CirculaireData extends DataItem { //
    static _idGen = new idGetter('circulaire');
    static velours_rouge = new Circulaire('velours rouge', velours, CirculaireData._idGen.getId());
    static velours_vert = new Circulaire('velours vert', velours, CirculaireData._idGen.getId());
    static velours_rose = new Circulaire('velours rose', velours, CirculaireData._idGen.getId());
    static velours_violet = new Circulaire('velours violet', velours, CirculaireData._idGen.getId());
    static velours_marron = new Circulaire('velours marron', velours, CirculaireData._idGen.getId());
    static velours_bordeaux = new Circulaire('velours bordeaux', velours, CirculaireData._idGen.getId());
    static velours_fushia = new Circulaire('velours fushia', velours, CirculaireData._idGen.getId());
    static velours_bleu_roy = new Circulaire('velours bleu roi', velours, CirculaireData._idGen.getId());

    static satin_rouge = new Circulaire('satin rouge', satin, CirculaireData._idGen.getId());
    static satin_orange = new Circulaire('satin orange', satin, CirculaireData._idGen.getId());
    static satin_jaune = new Circulaire('satin jaune', satin, CirculaireData._idGen.getId());
    static satin_jaune_liseret_violet = new Circulaire('satin jaune avec liseret violet', satin, CirculaireData._idGen.getId());
    static satin_bleu_et_noir = new Circulaire('satin bleu et noir', satin, CirculaireData._idGen.getId()).setCouleurs([
        DataCouleur.bleu, DataCouleur.noir
    ]);
    static satin_blanc = new Circulaire('satin blanc', satin, CirculaireData._idGen.getId());
    static satin_bleu = new Circulaire('satin bleu', satin, CirculaireData._idGen.getId());
    static satin_gris = new Circulaire('satin gris', satin, CirculaireData._idGen.getId());
    static satin_vert = new Circulaire('satin vert', satin, CirculaireData._idGen.getId());
    static satin_vert_fonce = new Circulaire('satin vert foncé', satin, CirculaireData._idGen.getId());
    static satin_vert_pomme = new Circulaire('satin vert pomme', satin, CirculaireData._idGen.getId());
    static satin_vert_clair = new Circulaire('satin vert clair', satin, CirculaireData._idGen.getId());
    static satin_violet = new Circulaire('satin violet', satin, CirculaireData._idGen.getId());
    static satin_marron = new Circulaire('satin marron', satin, CirculaireData._idGen.getId());
    static satin_rose_saumon = new Circulaire('satin rose saumon', satin, CirculaireData._idGen.getId());
    static satin_argente = new Circulaire('satin argenté', satin, CirculaireData._idGen.getId());
    static satin_rouge_et_blanc = new Circulaire('satin rouge et blanc', satin, CirculaireData._idGen.getId());
    static satin_bleu_et_jaune = new Circulaire('satin bleu et jaune', satin, CirculaireData._idGen.getId());
    static satin_bleu_et_rouge = new Circulaire('satin bleu et rouge', satin, CirculaireData._idGen.getId());
    static satin_vert_et_rouge = new Circulaire('satin vert et rouge', satin, CirculaireData._idGen.getId());
    static satin_vert_et_marron = new Circulaire('satin vert et marron', satin, CirculaireData._idGen.getId());
    static satin_rouge_et_noir = new Circulaire('satin rouge et noir', satin, CirculaireData._idGen.getId());
    static satin_moiret_vert = new Circulaire('satin moiret vert bordé de liserets amarantes',
        satin, CirculaireData._idGen.getId());
    static satin_coul_disp = new Circulaire('satin aux couleurs de la discipline étudiée', satin, CirculaireData._idGen.getId());
    static satin_coul_ufr = new Circulaire('satin suivant l\'UFR de rattachement', satin, CirculaireData._idGen.getId());

}

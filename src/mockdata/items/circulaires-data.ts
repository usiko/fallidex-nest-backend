

import { CircCouleur, CiculaireMatiereEnum, Circulaire } from 'src/app/models/models';
import { idGetter } from '../id-getter';
import { DataItem } from '../types';





class Couleur {
    static _idGen = new idGetter('color');
    static rouge = new CircCouleur('rouge', '#ff0000', Couleur._idGen.getId());
    static vert = new CircCouleur('vert', '#03a903', Couleur._idGen.getId());
    static vert_pomme = new CircCouleur('vert pomme', '#34c924', Couleur._idGen.getId());
    static vert_fonce = new CircCouleur('vert fonce', '#196B19', Couleur._idGen.getId());
    static vert_olive = new CircCouleur('moiré vert', '#6B8E23', Couleur._idGen.getId());
    static bleu = new CircCouleur('bleu', '#0000ff', Couleur._idGen.getId());
    static bleu_roy = new CircCouleur('bleu', '#318ce7', Couleur._idGen.getId());
    static noir = new CircCouleur('noir', '#000000', Couleur._idGen.getId());
    static gris = new CircCouleur('gris', '#555555', Couleur._idGen.getId());
    static blanc = new CircCouleur('blanc', '#ffffff', Couleur._idGen.getId());
    static jaune = new CircCouleur('jaune', '#ffff00', Couleur._idGen.getId());
    static orange = new CircCouleur('orange', '#ffa500', Couleur._idGen.getId());
    static rose = new CircCouleur('rose', '#ffc0cb', Couleur._idGen.getId());
    static rose_saumon = new CircCouleur('rose', '#f07977', Couleur._idGen.getId());
    static violet = new CircCouleur('violet', '#6e22b4', Couleur._idGen.getId());
    static marron = new CircCouleur('marron', '#800000', Couleur._idGen.getId());
    static bordeaux = new CircCouleur('bordeaux', '#6D071A', Couleur._idGen.getId());
    static fushia = new CircCouleur('fushia', '#ca2c92', Couleur._idGen.getId());
    static amarante = new CircCouleur('amarante', '#91283b', Couleur._idGen.getId());
}
const velours = CiculaireMatiereEnum.velours;
const satin = CiculaireMatiereEnum.satin;
export class CirculaireData extends DataItem { //
    static _idGen = new idGetter('circulaire');
    static velours_rouge = new Circulaire('velours rouge', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.rouge]);
    static velours_vert = new Circulaire('velours vert', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.vert]);
    static velours_rose = new Circulaire('velours rose', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.rose])
    static velours_violet = new Circulaire('velours violet', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.violet])
    static velours_marron = new Circulaire('velours marron', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.marron])
    static velours_bordeaux = new Circulaire('velours bordeaux', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.bordeaux])
    static velours_fushia = new Circulaire('velours fushia', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.fushia])
    static velours_bleu_roy = new Circulaire('velours bleu roi', velours, CirculaireData._idGen.getId()).setCouleurs([Couleur.bleu_roy])

    static satin_rouge = new Circulaire('satin rouge', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.rouge]);
    static satin_orange = new Circulaire('satin orange', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.orange]);
    static satin_jaune = new Circulaire('satin jaune', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.jaune]);
    static satin_jaune_liseret_violet = new Circulaire('satin jaune avec liseret violet', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.jaune, Couleur.violet]);
    static satin_bleu_et_noir = new Circulaire('satin bleu et noir', satin, CirculaireData._idGen.getId()).setCouleurs([
        Couleur.bleu, Couleur.noir
    ]);
    static satin_blanc = new Circulaire('satin blanc', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.blanc]);
    static satin_bleu = new Circulaire('satin bleu', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.bleu]);
    static satin_gris = new Circulaire('satin gris', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.gris]);
    static satin_vert = new Circulaire('satin vert', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.vert]);
    static satin_vert_fonce = new Circulaire('satin vert foncé', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.vert_fonce]);
    static satin_vert_pomme = new Circulaire('satin vert pomme', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.vert_pomme]);
    static satin_vert_clair = new Circulaire('satin vert clair', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.vert_pomme]);
    static satin_violet = new Circulaire('satin violet', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.violet]);
    static satin_marron = new Circulaire('satin marron', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.marron]);
    static satin_rose_saumon = new Circulaire('satin rose saumon', satin, CirculaireData._idGen.getId()).setCouleurs([Couleur.rose_saumon]);
    static satin_argente = new Circulaire('satin argenté', satin, CirculaireData._idGen.getId());
    static satin_rouge_et_blanc = new Circulaire('satin rouge et blanc', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.rouge, Couleur.blanc]);
    static satin_bleu_et_jaune = new Circulaire('satin bleu et jaune', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.bleu, Couleur.jaune]);
    static satin_bleu_et_rouge = new Circulaire('satin bleu et rouge', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.bleu, Couleur.rouge]);
    static satin_vert_et_rouge = new Circulaire('satin vert et rouge', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.vert, Couleur.rouge]);
    static satin_vert_et_marron = new Circulaire('satin vert et marron', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.vert, Couleur.marron]);
    static satin_rouge_et_noir = new Circulaire('satin rouge et noir', satin, CirculaireData._idGen.getId())
        .setCouleurs([Couleur.rouge, Couleur.noir]);
    static satin_moiret_vert = new Circulaire('satin moiret vert bordé de liserets amarantes',
        satin, CirculaireData._idGen.getId()).setCouleurs([
            Couleur.amarante,
            Couleur.vert_olive,
            Couleur.amarante
        ]);
    static satin_coul_disp = new Circulaire('satin aux couleurs de la discipline étudiée', satin, CirculaireData._idGen.getId());
    static satin_coul_ufr = new Circulaire('satin suivant l\'UFR de rattachement', satin, CirculaireData._idGen.getId());

}

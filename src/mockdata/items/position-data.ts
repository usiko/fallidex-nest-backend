import { PositionItem } from 'src/app/models/models';
import { DataItem } from '../types';
import { idGetter } from '../id-getter';


export class PositionData extends DataItem {
    private static _idGen = new idGetter('position');
    static aendroit = new PositionItem('à l\'endroit', PositionData._idGen.getId());
    static aenvers = new PositionItem('à l\'envers', PositionData._idGen.getId());
    static travers = new PositionItem('de travers', PositionData._idGen.getId());
    static surcirculaire = new PositionItem('sur circulaire', PositionData._idGen.getId());
    static survelours = new PositionItem('sur velours', PositionData._idGen.getId());
    static rubanelu = new PositionItem('sur ruban elu', PositionData._idGen.getId());
    static rubanasso = new PositionItem('sur ruban d\'asso', PositionData._idGen.getId());
    static rubanbleu = new PositionItem('sur ruban bleu', PositionData._idGen.getId());
    static rubanrose = new PositionItem('sur ruban rose', PositionData._idGen.getId());
    static seul = new PositionItem('seul', PositionData._idGen.getId());
    static rubancoularme = new PositionItem('sur ruban aux couleur armée', PositionData._idGen.getId());
}
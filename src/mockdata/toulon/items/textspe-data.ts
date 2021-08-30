import { DataItem } from '../../types';
import { idGetter } from '../../id-getter';
import { TextSpe } from 'src/app/models/models';


export class OtherSpe extends DataItem {
    static _idGen = new idGetter('spes');
    static minot = new TextSpe('le minot', 'Le Minot a le titre de Minot et non pas d’impétrant ', OtherSpe._idGen.getId(), 'Article XI');
    static pompon = new TextSpe(
        'le pompon',
        'Les baptisés ont un pompon rouge au centre de leur faluche',
        OtherSpe._idGen.getId(),
        'article XI',
        'Les guerres d’Italie, les progrès de la construction navale, l’excellence de notre rade favorable à l’évolution des vaisseaux, sa protection naturelle, contribuent à faire deToulon un port de guerre à partir du XVIe siècle.');
    static confirm = new TextSpe(
        'les adoption et confirmations',
        'Les Adoptions ou Confirmations sont nommées « Pomponisation » à Toulon',
        OtherSpe._idGen.getId(),
        'article XI',
        'Edit an 131 de la Faluche : Les adoptés reçoivent un pompon Bleu, les confirmés (faluchards baptisés d’une autre ville mais résidant dans l’ère Toulonnaise) reçoivent un pompon Rouge.Tous les Pomponisés arborent le Pompon décalé vers l’arrière.Seuls les baptisés ont le Pompon centré.');
    static bapteme = new TextSpe(
        'thème des baptèmes',
        'Les baptêmes Toulonnais ont tous pour thème les pirates : en l’honneur du corsaire Barberousse',
        OtherSpe._idGen.getId(),
        'article XI',
        'En 1543, notre ville connaît un épisode plutôt inattendu avec l’hivernage de la flotte de Barberousse, l’allié turc de François 1er '
    );
    static dabobit = new TextSpe(
        'le dagobit',
        'Le dagobit n’est pas reconnu sur Toulon, les toulonnais pourront cependant le pratiquer en extérieur ',
        OtherSpe._idGen.getId(),
        'article XI',
    );

    static pas_croix = new TextSpe(
        'Pas de croix',
        'Les faluchards baptisés Toulonnais ne reconnaissent pas l’autorité des croix. ' +
        'Seul le statut d’ancien du porteur de la croix peut être reconnu.',
        OtherSpe._idGen.getId(),
        'artcile III bis, article XI',
        'Il n’y a pas de croix à Toulon, les toulonnais souhaitent revenir aux toutes premières origines de la faluche, ' +
        'néanmoins pour respecter le code national qui dit que l’on peut baptiser sous l’œil avisé de trois anciens, ' +
        'c’est donc l’assemblée générale des faluchards toulonnais qui baptise.',
    );
    static assemblée = new TextSpe(
        'L\'assemblée',
        'L’asemblée des faluchards toulonais ne reconnaît pas le statut de croix dans sa ville c’est pourquoi ' +
        'c’est une assemblée de faluchards toulonnais qui procède aux baptêmes et autres cérémonies.',
        OtherSpe._idGen.getId(),
        'article XIII',
        'Les faluchards Toulonnais s’engagent à être respectueux des traditions des autres villes et notamment du statut du grand maître en leur sein ' +
        'L’assemblée des faluchards Toulonnais tient lieu de grand maître pour tout acte officiel (remise d’insigne par exemple), ' +
        'les décisions sont prises par votes à verres levés(mains levées à défaut de verres) après convocation de tous les membres.' +
        'Lors du baptême l’assemblée décide d’un officiant pour organiser les différentes épreuves du baptême.'
    );
    static pilouteur = new TextSpe(
        'Le grand pilouteur',
        'Un Grand Pilouteur sera désigné par l’Assemblée Toulonnaise, pour ses capacités orales. Lors de son mandat, il sera en charge de lancer le traditionnel Pilou Pilou à chaque évènement. Il se reconnait par le port d’un ruban Rouge et Noir agrémenté d’un « P », pendant de sa faluche.',
        OtherSpe._idGen.getId(),
        'article XI',
    );
    static fal_cousue = new TextSpe(
        'Faluche cousue',
        'Le Baptisé recevra lors de son baptême une faluche qu’il aura préalablement cousue, et ce afin qu’il prenne conscience de l’engagement et qu’il ait une meilleure adhésion avec sa coiffe. Cela évite également les faluches restées non cousues longtemps après les baptêmes.',
        OtherSpe._idGen.getId(),
        'article XI',
    );
    static ruban = new TextSpe(
        'Ruban de ville',
        'Un ruban bleu roi et jaune pour les couleurs de la ville ',
        OtherSpe._idGen.getId(),
        'article XI',
    );
    static representant = new TextSpe(
        'Le representant national',
        'Un representant national par décision unanime du national du 131 et par décision de l’AG du 24 mai 2019',
        OtherSpe._idGen.getId(),
        'article XIII',
        'Chaque année à l’AG de milieu d’année (décembre/janvier), un représentant national de ' +
        'Toulon sera élu (maximum 2 mandats), il aura pour rôle d’être le relai entre le forum des croix, les ' +
        'informations qui y sont transmis et la communauté toulonnaise. Il aura aussi pour devoir d’être la ' +
        'voix de Toulon et des décisions prises en AG. Il se doit d’être présent à l’anniversaire de la ' +
        'Faluche, et de siéger à la réunion des croix lors de l’anniversaire en tant que représentant de ' +
        'Toulon. Il doit présenter les doléances allant être débattues à l’anniversaire lors de l’AG de fin ' +
        'd’année scolaire, qui doit obligatoirement précéder l’anniversaire. Ces doléances seront ' +
        'débattues et le représentant votera lors de la réunion des croix en suivant les résultats de l’AG. Il ' +
        'n’a pas le droit de s’exprimer en son nom sur le Forum des croix, toute intervention de sa part doit ' +
        'avoir été préalablement approuvé par l’Assemblée Toulonnaise.'
    );
    static rubanassos = new TextSpe(
        'Ruban d\'assosciation',
        'Les membres du bureau gardent le ruban frontal occipital et ajoutent un ruban en V du central à l’occipital en précisant le poste et l’année',
        OtherSpe._idGen.getId(),
        'article X',
    );
}
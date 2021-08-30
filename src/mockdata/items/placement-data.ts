
import { DataItem } from '../types';
import { idGetter } from '../id-getter';
import { Placement } from 'src/models/models';


export class PlacementData extends DataItem {
	private static _idGen = new idGetter('placement');
	static libre = new Placement('libre', PlacementData._idGen.getId());
	static libre_cond = new Placement('libre sous conditions', PlacementData._idGen.getId());
	static decerne = new Placement('par l\'assemblée', PlacementData._idGen.getId());
	static decerne_asso = new Placement('par l\'association', PlacementData._idGen.getId());
	static decerne_part = new Placement('par le/la partenaire', PlacementData._idGen.getId());
	static decerne_anciens = new Placement('par les très anciens faluchard de la ville', PlacementData._idGen.getId());
	static decerne_gm = new Placement('par le Grand Maître', PlacementData._idGen.getId());
	static offert = new Placement('offert', PlacementData._idGen.getId());

}
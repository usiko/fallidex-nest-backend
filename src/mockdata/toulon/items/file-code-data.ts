
import { DataItem } from '../../types';
import { idGetter } from '../../id-getter';
import { FileCode } from 'src/models/models';

export class FileCodeData extends DataItem {
	private static _idGen = new idGetter('file-code');
	static c2020 = new FileCode('130', 'https://drive.google.com/file/d/1v_gJ8Wh-5GOe4jv2pBu5bnd62Z4DijpQ/view?usp=sharing', new Date(), FileCodeData._idGen.getId());
	static c2019 = new FileCode('130', 'https://drive.google.com/file/d/1PmbhXuknuXIa8_ga7YjuZJqFhqQtSD2g/view?usp=sharing', new Date(), FileCodeData._idGen.getId());
	static c2018 = new FileCode('129', 'https://drive.google.com/file/d/1SY4zHeDpKZL6HaPeN3Z8dd52P0BZpOY6/view?usp=sharing', new Date(), FileCodeData._idGen.getId());
	static c2014 = new FileCode('125', 'https://drive.google.com/file/d/19g_3LZ6-v32teubybRuJNPlQ8wg_Cfzj/view?usp=sharing', new Date(), FileCodeData._idGen.getId());
	static c2008 = new FileCode('119', 'https://drive.google.com/file/d/18H4aw6HoiVvFZyKzC-LM3btf8z-KR8Qo/view?usp=sharing', new Date(), FileCodeData._idGen.getId());
}
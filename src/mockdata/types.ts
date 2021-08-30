import { Circulaire, Signification, Symbole, Filiere, ImgUrl, Placement, TextSpe, FileCode, PositionItem } from '../models/models';

export interface LinkModel {
    filiereid?: string;
    significationid?: string;
    circulaireid?: string;
    positionId: string;
    symboleid: string;
    placementId: string;

    spe?: boolean;
    abs_ville?: boolean;
    note?: string;
}

export interface LinkImgSymboleModel {
    symboleId: string;
    imgid: string;
}

export interface DataItems {
    circulaires: Circulaire[];
    significations: Signification[];
    symboles: Symbole[];
    filieres: Filiere[];
    imgUrls: ImgUrl[];
    positions: PositionItem[];
    placement: Placement[];
    textSpes: TextSpe[];
    fileCode: FileCode[];
}

export class DataItem {

}
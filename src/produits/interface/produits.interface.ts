import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export interface ProduitsInterface extends Document {
     titre: string;
    readonly description: string;
    readonly marque: string;
    readonly categorie: mongoose.Schema.Types.ObjectId;
    readonly quantite: number;
    readonly vote: any;
    readonly images: any;
    readonly detail_fabrication: {};
    readonly detail_physique: {};
    readonly etat: string;
    readonly prix: {};
    readonly garantie : number;
    readonly vu : number;
    readonly provenance : string;
    readonly favoris: any;
    readonly historique: any;
}
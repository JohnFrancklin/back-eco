import { Document } from 'mongoose';

export interface ProduitsInterface extends Document {
    readonly titre: string;
    readonly description: string;
    readonly categorie: string;
    readonly quantite: number;
    readonly vote: any;
    readonly images: any;
    readonly detail_fabrication: {};
    readonly detail_physique: {};
    readonly prix: {};
    readonly favoris: any;
}
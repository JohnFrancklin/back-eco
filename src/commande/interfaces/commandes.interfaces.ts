import { Document } from 'mongoose';

export interface commandesInterfaces extends Document {
    numero_commande: String;
    readonly id_user: String;
    readonly client: string;
    readonly adresse: string;
    readonly note_delivrance: string;
    readonly date_creation: Date;
    readonly etat: string;
    readonly tracage:{};
    readonly payment:{};
    readonly commandes:[];
} 
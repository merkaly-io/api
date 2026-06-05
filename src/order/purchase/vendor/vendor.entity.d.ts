import { AbstractEntity } from '../../../abstract.entity';
export declare class PurchaseVendorEntity extends AbstractEntity {
    name: string;
    description: string;
    email: string;
    phone?: string;
    website?: string;
    logo?: string;
    taxId?: string;
    active: boolean;
}

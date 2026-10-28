import { AbstractEntity } from './abstract.entity';
export declare abstract class ContactEntity extends AbstractEntity {
    name: string;
    description?: string;
    email?: string;
    phone?: string;
    website?: string;
    logo?: string;
    taxId?: string;
    active: boolean;
}

import { AbstractEntity } from '../abstracts/abstract.entity';
export declare abstract class AddressEntity extends AbstractEntity {
    line1: string;
    line2?: string;
    name: string;
    city: string;
    state: string;
    locality: string;
    country: string;
    code: string;
    location: {
        lat: number;
        lng: number;
    };
}

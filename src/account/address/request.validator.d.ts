import { AbstractRequestValidator } from '../../abstract.validator';
import type { AccountAddressEntity } from './address.entity';
export declare class CreateAddressRequestValidator extends AbstractRequestValidator {
    street: string;
    name: string;
    complement?: string;
    country?: string;
    code?: string;
    longitude?: number;
    latitude?: number;
    constructor(address?: AccountAddressEntity);
}
export declare class UpdateAddressRequestValidator extends CreateAddressRequestValidator {
    street: string;
    name: string;
}

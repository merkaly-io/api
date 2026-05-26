import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { AccountAddressEntity } from 'src/domain/account/entities/address.entity';
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

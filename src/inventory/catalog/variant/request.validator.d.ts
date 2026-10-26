import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogVariantEntity } from './variant.entity';
export declare class CreateVariantRequestValidator extends AbstractRequestValidator {
    product?: string;
    price?: number;
    active?: boolean;
    constructor(variant?: CatalogVariantEntity);
}
export declare class UpdateVariantRequestValidator extends CreateVariantRequestValidator {
}

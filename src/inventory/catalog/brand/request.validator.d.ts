import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogBrandEntity } from './brand.entity';
export declare class CreateBrandRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    constructor(brand?: CatalogBrandEntity);
}
export declare class UpdateBrandRequestValidator extends CreateBrandRequestValidator {
    name: string;
}

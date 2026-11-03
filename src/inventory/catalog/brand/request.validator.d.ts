import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogBrandEntity } from './brand.entity';
export declare class CreateBrandRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    posterId?: string | null;
    constructor(brand?: CatalogBrandEntity);
}
export declare class UpdateBrandRequestValidator extends CreateBrandRequestValidator {
    name: string;
}

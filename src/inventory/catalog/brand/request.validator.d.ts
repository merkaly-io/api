import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogBrandEntity } from 'src/domain/inventory/catalog/entities/brand.entity';
export declare class CreateBrandRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    constructor(brand?: CatalogBrandEntity);
}
export declare class UpdateBrandRequestValidator extends CreateBrandRequestValidator {
    name: string;
}

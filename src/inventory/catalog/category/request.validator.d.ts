import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogCategoryEntity } from 'src/domain/inventory/catalog/entities/category.entity';
export declare class CreateCategoryRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    constructor(category?: CatalogCategoryEntity);
}
export declare class UpdateCategoryRequestValidator extends CreateCategoryRequestValidator {
    name: string;
}

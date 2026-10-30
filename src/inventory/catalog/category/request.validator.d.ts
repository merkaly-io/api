import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogCategoryEntity } from './category.entity';
export declare class CreateCategoryRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    icon?: string | null;
    parent?: string | null;
    constructor(category?: CatalogCategoryEntity);
}
export declare class UpdateCategoryRequestValidator extends CreateCategoryRequestValidator {
    name: string;
}

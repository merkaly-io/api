import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogAttributeEntity } from 'src/domain/inventory/catalog/entities/attribute.entity';
export declare class CreateAttributeRequestValidator extends AbstractRequestValidator {
    name: string;
    values?: string[];
    active?: boolean;
    constructor(attribute?: CatalogAttributeEntity);
}
export declare class UpdateAttributeRequestValidator extends CreateAttributeRequestValidator {
    name: string;
}

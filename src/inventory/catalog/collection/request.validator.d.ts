import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { CatalogCollectionEntity } from 'src/domain/inventory/catalog/entities/collection.entity';
export declare class CreateCollectionRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    products?: string[];
    constructor(collection?: CatalogCollectionEntity);
}
export declare class UpdateCollectionRequestValidator extends CreateCollectionRequestValidator {
    name: string;
}

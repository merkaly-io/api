import { AbstractRequestValidator } from '../../../abstract.validator';
import type { CatalogCollectionEntity } from './collection.entity';
export declare class CreateCollectionRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    products?: string[];
    constructor(collection?: CatalogCollectionEntity);
}
export declare class UpdateCollectionRequestValidator extends CreateCollectionRequestValidator {
    name: string;
}

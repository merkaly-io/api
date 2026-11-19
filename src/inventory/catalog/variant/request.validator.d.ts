import { AbstractRequestValidator } from "../../../abstract.validator";
import type { CatalogVariantEntity } from "./variant.entity";
export declare class UpdateVariantRequestValidator extends AbstractRequestValidator {
    retailPrice?: number;
    active?: boolean;
    constructor(variant?: CatalogVariantEntity);
}

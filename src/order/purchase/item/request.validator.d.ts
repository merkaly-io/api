import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { ItemEntity } from 'src/infrastructure/entities/item.entity';
export declare class PurchaseItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    warehouse?: string;
    quantity: number;
    price: number;
    notes: string;
    constructor(item?: ItemEntity);
    get total(): number;
}

import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { ItemEntity } from 'src/infrastructure/entities/item.entity';
export declare class SaleItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    warehouse?: string;
    quantity: number;
    notes?: string;
    price: number;
    constructor(item?: ItemEntity);
    get total(): number;
}

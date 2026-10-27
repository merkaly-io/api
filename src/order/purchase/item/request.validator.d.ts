import { AbstractRequestValidator } from '../../../abstract.validator';
import type { ItemEntity } from '../../sale/item/item.entity';
export declare class PurchaseItemRequestValidator extends AbstractRequestValidator {
    _id?: string;
    product: string;
    variant: string;
    quantity: number;
    price: number;
    notes: string;
    constructor(item?: ItemEntity);
    get total(): number;
}

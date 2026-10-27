import { AbstractRequestValidator } from '../../../abstract.validator';
import type { ItemEntity } from './item.entity';
export declare class SaleItemRequestValidator extends AbstractRequestValidator {
    _id?: string;
    product: string;
    variant: string;
    quantity: number;
    notes?: string;
    price: number;
    constructor(item?: ItemEntity);
    get total(): number;
}

import { AbstractRequestValidator } from '../../../abstract.validator';
import { AddressValidator } from '../../../address.validator';
import type { StockWarehouseEntity } from './warehouse.entity';
export declare class CreateStockWarehouseRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    address?: AddressValidator;
    isDefault?: boolean;
    active?: boolean;
    constructor(warehouse?: StockWarehouseEntity);
}
export declare class UpdateStockWarehouseRequestValidator extends CreateStockWarehouseRequestValidator {
    name: string;
}

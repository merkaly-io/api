import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import { AddressValidator } from 'src/infrastructure/validators/address.validator';
import type { StockWarehouseEntity } from 'src/domain/inventory/stock/entities/warehouse.entity';
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

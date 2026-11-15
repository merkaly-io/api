import { OrderSaleStatusEnum } from './sale.enum';
import type { LogisticsShipmentEntity } from '../../logistics/shipment/shipment.entity';
type ReceiptShipment = Pick<LogisticsShipmentEntity, 'deliveredAt' | 'receivedBy'>;
export interface OrderSaleReceipt {
    confirmable: boolean;
    until: Date | null;
}
export declare const deliveredAtOf: (shipments: ReceiptShipment[]) => Date;
export declare const confirmedByBuyer: (shipments: ReceiptShipment[]) => boolean;
export declare function saleReceipt(status: OrderSaleStatusEnum, shipments: ReceiptShipment[], now?: number): {
    confirmable: boolean;
    until: Date;
};
export {};

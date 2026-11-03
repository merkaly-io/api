import { AbstractEntity } from '../../abstract.entity';
import { LogisticsShipmentDirectionEnum, LogisticsShipmentSourceEnum, LogisticsShipmentStatusEnum } from './shipment.enum';
import { LogisticsShipmentEventEntity } from './shipment.event.entity';
import type { OrderPurchaseEntity } from '../../order/purchase/purchase.entity';
import type { OrderSaleEntity } from '../../order/sale/sale.entity';
import type { StatusEntity } from '../../status.plugin';
export declare class LogisticsShipmentEntity extends AbstractEntity {
    order: OrderSaleEntity;
    purchase?: OrderPurchaseEntity | null;
    direction: LogisticsShipmentDirectionEnum;
    source: LogisticsShipmentSourceEnum;
    trackingNumber?: string | null;
    carrier?: string | null;
    trackingUrl?: string | null;
    shippedAt?: Date | null;
    deliveredAt?: Date | null;
    events: LogisticsShipmentEventEntity[];
    status: LogisticsShipmentStatusEnum;
    history: StatusEntity<LogisticsShipmentStatusEnum>[];
}

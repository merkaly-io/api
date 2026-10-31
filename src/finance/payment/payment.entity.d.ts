import { OrderPurchaseEntity } from '../../order/purchase/purchase.entity';
import { OrderSaleEntity } from '../../order/sale/sale.entity';
import { AbstractEntity } from '../../abstract.entity';
import { StatusEntity } from '../../status.plugin';
import { ITransitionable } from '../../transitionable.interface';
import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from './payment.enum';
import { FinancePaymentGatewayEntity } from './payment.gateway.entity';
export type OrderEntity = OrderSaleEntity | OrderPurchaseEntity;
export declare class FinancePaymentEntity extends AbstractEntity implements ITransitionable<FinancePaymentStatusEnum> {
    type: FinancePaymentTypeEnum;
    target: string;
    order: OrderEntity;
    amount: number;
    fee: number;
    method?: FinancePaymentMethodEnum | null;
    gateway?: FinancePaymentGatewayEntity | null;
    status: FinancePaymentStatusEnum;
    history: StatusEntity<FinancePaymentStatusEnum>[];
    readonly number: string;
}

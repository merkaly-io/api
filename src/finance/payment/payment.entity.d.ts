import { PurchaseTransactionEntity } from '../../order/purchase/transaction/transaction.entity';
import { SaleTransactionEntity } from '../../order/sale/transaction/transaction.entity';
import { AbstractEntity } from '../../abstract.entity';
import { StatusEntity } from '../../status.plugin';
import { ITransitionable } from '../../transitionable.interface';
import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from './payment.enum';
export type OrderEntity = SaleTransactionEntity | PurchaseTransactionEntity;
export declare class FinancePaymentEntity extends AbstractEntity implements ITransitionable<FinancePaymentStatusEnum> {
    type: FinancePaymentTypeEnum;
    target: string;
    order: OrderEntity;
    amount: number;
    fee: number;
    method?: FinancePaymentMethodEnum;
    status: FinancePaymentStatusEnum;
    history: StatusEntity<FinancePaymentStatusEnum>[];
    readonly number: string;
}

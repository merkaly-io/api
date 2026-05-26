import { PurchaseTransactionEntity } from 'src/domain/order/purchase/entities/transaction.entity';
import { SaleTransactionEntity } from 'src/domain/order/sale/entities/transaction.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { StatusEntity } from 'src/infrastructure/plugins/status.plugin';
import { ITransitionable } from 'src/infrastructure/types/transitionable.interface';
import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from '../enums/payment.enum';
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

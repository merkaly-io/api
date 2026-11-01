import { AbstractEntity } from '../../abstract.entity';
import { PaymentProviderEnum } from './provider.enum';
import { IntegrationPaymentAccountEntity } from './payment.account.entity';
export declare class IntegrationPaymentEntity extends AbstractEntity {
    provider: PaymentProviderEnum;
    account?: IntegrationPaymentAccountEntity | null;
    accountError?: string | null;
}

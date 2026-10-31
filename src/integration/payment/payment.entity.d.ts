import { AbstractEntity } from '../../abstract.entity';
import { PaymentProviderEnum } from './provider.enum';
import { IntegrationPaymentRecipientEntity } from './payment.recipient.entity';
export declare class IntegrationPaymentEntity extends AbstractEntity {
    provider: PaymentProviderEnum;
    recipient?: IntegrationPaymentRecipientEntity | null;
}

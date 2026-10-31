import { AbstractEntity } from '../../abstract.entity';
import { PaymentProviderEnum } from './provider.enum';
import { IntegrationPaymentConnectionEntity } from './payment.connection.entity';
export declare class IntegrationPaymentEntity extends AbstractEntity {
    provider: PaymentProviderEnum;
    connection?: IntegrationPaymentConnectionEntity;
}

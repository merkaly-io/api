import type { PaymentChargeStatusEnum } from './charge.enum';
import type { PaymentProviderEnum } from './provider.enum';
import type { FinancePaymentMethodEnum } from '../../finance/payment/payment.enum';
export type StorePaymentMethod = FinancePaymentMethodEnum.PIX | FinancePaymentMethodEnum.CARD;
export interface StorePaymentConfig {
    methods: StorePaymentMethod[];
    provider: PaymentProviderEnum | null;
    publicKey: string | null;
}
export interface PaymentCharge {
    amount: number;
    attempt: number;
    expiresAt: Date | null;
    method: StorePaymentMethod;
    message: string | null;
    paid: boolean;
    qrCode: string | null;
    qrCodeUrl: string | null;
    status: PaymentChargeStatusEnum;
    statusDetail: string | null;
}

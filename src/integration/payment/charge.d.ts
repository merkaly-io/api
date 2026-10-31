import type { PaymentChargeStatusEnum } from './charge.enum';
import type { PaymentProviderEnum } from './provider.enum';
import type { FinancePaymentMethodEnum } from '../../finance/payment/payment.enum';
export type StorePaymentMethod = FinancePaymentMethodEnum.PIX | FinancePaymentMethodEnum.CARD;
export interface StorePaymentConfig {
    methods: StorePaymentMethod[];
    provider: PaymentProviderEnum | null;
}
export interface PaymentChargeCard {
    brand: string | null;
    last4: string | null;
}
export interface PaymentCharge {
    amount: number;
    attempt: number;
    card: PaymentChargeCard | null;
    expiresAt: Date | null;
    method: StorePaymentMethod;
    message: string | null;
    paid: boolean;
    qrCode: string | null;
    qrCodeImage: string | null;
    status: PaymentChargeStatusEnum;
    statusDetail: string | null;
}

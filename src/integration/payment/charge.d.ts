import type { PaymentChargeStatusEnum } from './charge.enum';
import type { PaymentProviderEnum } from './provider.enum';
import type { FinancePaymentMethodEnum } from "../../finance/payment/payment.enum";
export type StorePaymentMethod = FinancePaymentMethodEnum.PIX;
export interface StorePaymentConfig {
    methods: StorePaymentMethod[];
    provider: PaymentProviderEnum | null;
}
export interface PaymentCharge {
    amount: number;
    attempt: number;
    expiresAt: Date | null;
    method: StorePaymentMethod;
    paid: boolean;
    qrCode: string | null;
    qrCodeImage: string | null;
    status: PaymentChargeStatusEnum;
    statusDetail: string | null;
}

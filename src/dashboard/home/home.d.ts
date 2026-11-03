import type { PaymentAccountBalance, PaymentAccountStatus } from '../../integration/payment/account';
import type { SupplierConnectionStatus } from '../../integration/supplier/connection';
import type { OrderSaleAttentionEnum } from '../../order/sale/attention.enum';
import type { OrderSaleStatusEnum } from '../../order/sale/sale.enum';
import type { OrderSaleAttentionSummary } from '../../order/sale/attention';
export interface DashboardHomeDay {
    date: string;
    orders: number;
    revenue: number;
}
export interface DashboardHomePeriod {
    days: number;
    from: Date;
    to: Date;
    orders: number;
    revenue: number;
    profit: number;
    margin: number | null;
    withoutCost: number;
    series: DashboardHomeDay[];
}
export interface DashboardHomeSale {
    _id: string;
    number: string;
    createdAt: Date;
    customer: string | null;
    total: number;
    profit: number | null;
    status: OrderSaleStatusEnum;
    attention: OrderSaleAttentionEnum | null;
}
export interface DashboardHomeIntegrations {
    supplier: SupplierConnectionStatus | null;
    payment: PaymentAccountStatus | null;
    balance: PaymentAccountBalance | null;
    failures: ('supplier' | 'payment' | 'balance')[];
}
export interface DashboardHomeOnboarding {
    products: number;
    sales: number;
}
export interface DashboardHome {
    attention: OrderSaleAttentionSummary;
    period: DashboardHomePeriod;
    recent: DashboardHomeSale[];
    integrations: DashboardHomeIntegrations;
    onboarding: DashboardHomeOnboarding;
}

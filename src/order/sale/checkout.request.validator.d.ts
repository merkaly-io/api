import { AbstractRequestValidator } from '../../abstract.validator';
import { SaleDeliveryRequestValidator } from './delivery.request.validator';
import type { StorePaymentMethod } from '../../integration/payment/charge';
export declare class CheckoutItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    quantity: number;
}
export declare class CreateCheckoutRequestValidator extends AbstractRequestValidator {
    items: CheckoutItemRequestValidator[];
    delivery: SaleDeliveryRequestValidator;
    notes?: string;
    method?: StorePaymentMethod;
}

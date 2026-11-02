import { AbstractRequestValidator } from '../../abstract.validator';
import { SaleShippingRequestValidator } from './shipping.request.validator';
import type { StorePaymentMethod } from '../../integration/payment/charge';
export declare class CheckoutItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    quantity: number;
}
export declare class CreateCheckoutRequestValidator extends AbstractRequestValidator {
    items: CheckoutItemRequestValidator[];
    shipping: SaleShippingRequestValidator;
    notes?: string;
    method?: StorePaymentMethod;
}

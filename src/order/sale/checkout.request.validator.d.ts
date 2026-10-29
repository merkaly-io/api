import { AbstractRequestValidator } from '../../abstract.validator';
import { SaleShippingRequestValidator } from './shipping.request.validator';
export declare class CheckoutItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    quantity: number;
}
export declare class CreateCheckoutRequestValidator extends AbstractRequestValidator {
    items: CheckoutItemRequestValidator[];
    shipping: SaleShippingRequestValidator;
    notes?: string;
}

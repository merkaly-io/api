import { AbstractRequestValidator } from '../../abstract.validator';
import { CheckoutItemRequestValidator } from './checkout.request.validator';
export declare class CheckoutQuoteDestinationRequestValidator extends AbstractRequestValidator {
    postalCode: string;
    country: string;
}
export declare class CheckoutQuoteRequestValidator extends AbstractRequestValidator {
    items: CheckoutItemRequestValidator[];
    destination: CheckoutQuoteDestinationRequestValidator;
}

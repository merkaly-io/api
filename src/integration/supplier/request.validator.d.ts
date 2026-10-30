import { AbstractRequestValidator } from '../../abstract.validator';
export declare class PreviewSupplierProductRequestValidator extends AbstractRequestValidator {
    url: string;
}
export declare class ImportSupplierProductRequestValidator extends PreviewSupplierProductRequestValidator {
    markup?: number;
}

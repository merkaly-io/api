import { AbstractRequestValidator } from '../../abstract.validator';
import { FinancePaymentMethodEnum } from './payment.enum';
import type { FinancePaymentReportStatus } from './report';
export declare class FinancePaymentReportRangeRequestValidator extends AbstractRequestValidator {
    from: string;
    to: string;
}
export declare class FinancePaymentReportSearchRequestValidator extends FinancePaymentReportRangeRequestValidator {
    org?: string;
    status?: FinancePaymentReportStatus;
    method?: FinancePaymentMethodEnum;
    page?: number;
    limit?: number;
}

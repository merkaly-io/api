import { AbstractRequestValidator } from '../../abstract.validator';
export declare const DASHBOARD_PERIOD_DAYS: readonly [7, 30, 90];
export declare class DashboardPeriodRequestValidator extends AbstractRequestValidator {
    days?: (typeof DASHBOARD_PERIOD_DAYS)[number];
}

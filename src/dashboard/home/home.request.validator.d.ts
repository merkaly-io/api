import { AbstractRequestValidator } from '../../abstract.validator';
export declare const DASHBOARD_HOME_DAYS: readonly [7, 30, 90];
export declare class DashboardHomeRequestValidator extends AbstractRequestValidator {
    days?: (typeof DASHBOARD_HOME_DAYS)[number];
}

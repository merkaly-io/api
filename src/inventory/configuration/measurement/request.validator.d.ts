import { AbstractRequestValidator } from '../../../abstract.validator';
import type { ConfigurationMeasurementEntity } from './measurement.entity';
import type { ConfigurationUnitEntity } from '../unit/unit.entity';
export declare class ConfigurationUnitRequestValidator extends AbstractRequestValidator {
    active?: boolean;
    description?: string;
    isBaseUnit?: boolean;
    name: string;
    symbol: string;
    constructor(unit?: ConfigurationUnitEntity);
}
export declare class CreateConfigurationMeasurementRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    active?: boolean;
    units?: ConfigurationUnitRequestValidator[];
    constructor(measurement?: ConfigurationMeasurementEntity);
}
export declare class UpdateConfigurationMeasurementRequestValidator extends CreateConfigurationMeasurementRequestValidator {
    name: string;
}

import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { ConfigurationMeasurementEntity } from 'src/domain/inventory/configuration/entities/measurement.entity';
import type { ConfigurationUnitEntity } from 'src/domain/inventory/configuration/entities/unit.entity';
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

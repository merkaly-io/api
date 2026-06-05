import { AbstractEntity } from '../../../abstract.entity';
import { ConfigurationUnitEntity } from '../unit/unit.entity';
export declare class ConfigurationMeasurementEntity extends AbstractEntity {
    name: string;
    description?: string;
    active: boolean;
    units: ConfigurationUnitEntity[];
}

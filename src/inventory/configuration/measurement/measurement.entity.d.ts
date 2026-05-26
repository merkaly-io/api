import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { ConfigurationUnitEntity } from './unit.entity';
export declare class ConfigurationMeasurementEntity extends AbstractEntity {
    name: string;
    description?: string;
    active: boolean;
    units: ConfigurationUnitEntity[];
}

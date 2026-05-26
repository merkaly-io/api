import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class ConfigurationUnitEntity extends AbstractEntity {
    name: string;
    symbol: string;
    description?: string;
    active: boolean;
    isBaseUnit: boolean;
}

import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class CatalogAttributeEntity extends AbstractEntity {
    name: string;
    values: string[];
    active: boolean;
}

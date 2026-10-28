import { AbstractEntity } from '../../abstract.entity';
import { SupplierProviderEnum } from './provider.enum';
import { IntegrationSupplierConnectionEntity } from './supplier.connection.entity';
export declare class IntegrationSupplierEntity extends AbstractEntity {
    provider: SupplierProviderEnum;
    connection?: IntegrationSupplierConnectionEntity;
}

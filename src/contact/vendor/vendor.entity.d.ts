import { ContactEntity } from '../../contact.entity';
import type { IntegrationSupplierEntity } from '../../integration/supplier/supplier.entity';
export declare class ContactVendorEntity extends ContactEntity {
    supplier: IntegrationSupplierEntity;
    externalId: string;
}

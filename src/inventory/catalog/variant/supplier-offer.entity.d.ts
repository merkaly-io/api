import { MoneyEntity } from '../../../money.entity';
import { SupplierAvailability } from './supplier-availability.enum';
export declare class SupplierOfferEntity {
    unitCost?: MoneyEntity;
    availability: SupplierAvailability;
    observedAt: Date;
}

import { MoneyEntity } from './money.entity';
import { ProviderSkuReferenceEntity } from './provider-reference.entity';
export declare class OrderOptionSnapshotEntity {
    name: string;
    value: string;
}
export declare class OrderLineSnapshotEntity {
    title: string;
    source: ProviderSkuReferenceEntity;
    options?: OrderOptionSnapshotEntity[];
    unitPrice: MoneyEntity;
}
export declare class OrderDestinationSnapshotEntity {
    recipient: string;
    line1: string;
    line2?: string;
    city: string;
    region?: string;
    postalCode?: string;
    country: string;
}

import type { CatalogProductSupplierStateEnum } from './product.supplier.enum';
export interface CatalogProductSummary {
    published: number;
    draft: number;
    underCost: number;
    supplier: Record<CatalogProductSupplierStateEnum, number>;
}

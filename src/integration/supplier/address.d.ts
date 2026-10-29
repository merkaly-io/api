export interface SupplierAddressCity {
    name: string;
}
export interface SupplierAddressState {
    code: string;
    name: string;
    cities: SupplierAddressCity[];
}
export interface SupplierAddressStatesResponse {
    country: string;
    states: Omit<SupplierAddressState, 'cities'>[];
}
export interface SupplierAddressCitiesResponse {
    country: string;
    state: string;
    cities: SupplierAddressCity[];
}

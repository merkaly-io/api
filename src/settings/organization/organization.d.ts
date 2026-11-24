import type { SettingsOrganizationSocialContract } from "./organization.contract";
export interface SettingsOrganizationSelectOption {
    text: string;
    value: string;
}
export interface SettingsOrganizationProfileMeta {
    countries: SettingsOrganizationSelectOption[];
    currencies: SettingsOrganizationSelectOption[];
}
export interface SettingsOrganizationStoreProfile {
    description?: string;
    email?: string;
    favicon?: string;
    logo?: string;
    name: string;
    ogImage?: string;
    primaryColor?: string;
    social?: SettingsOrganizationSocialContract;
}
export interface SettingsOrganizationStoreCompany extends SettingsOrganizationStoreProfile {
    checkout: {
        available: boolean;
    };
}
export declare const SETTINGS_STORE_NAME_MIN = 3;
export declare const SETTINGS_STORE_NAME_MAX = 50;
export declare const SETTINGS_STORE_NAME_PATTERN: RegExp;
export declare const SETTINGS_STORE_NAME_RESERVED: readonly string[];

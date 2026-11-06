import type { SettingsOrganizationSocialContract } from './organization.contract';
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

import { SettingsOrganizationEnum } from './organization.enum';
export interface SettingsOrganizationLocationContract {
    lat?: number;
    lng?: number;
}
export interface SettingsOrganizationAddressContract {
    city?: string;
    code?: string;
    country?: string;
    line1?: string;
    line2?: string;
    location?: SettingsOrganizationLocationContract;
    state?: string;
}
export interface SettingsOrganizationContactContract {
    email?: string;
    phone?: string;
    website?: string;
}
export interface SettingsOrganizationLocalizationContract {
    currency?: string;
}
export interface SettingsOrganizationIdentityContract {
    legalName?: string;
    name?: string;
    taxId?: string;
}
export interface SettingsOrganizationBrandingContract {
    description?: string;
    logo?: string;
}
export interface SettingsOrganizationBillingContract {
    email?: string;
}
export type SettingsOrganizationSecurityContract = Record<string, unknown>;
export type SettingsOrganizationSequenceContract = Record<string, unknown>;
export interface SettingsOrganizationProfileContract {
    address: SettingsOrganizationAddressContract;
    billing: SettingsOrganizationBillingContract;
    branding: SettingsOrganizationBrandingContract;
    contact: SettingsOrganizationContactContract;
    identity: SettingsOrganizationIdentityContract;
    localization: SettingsOrganizationLocalizationContract;
}
export interface SettingsOrganizationValueMap {
    [SettingsOrganizationEnum.ORGANIZATION_ADDRESS]: SettingsOrganizationAddressContract;
    [SettingsOrganizationEnum.ORGANIZATION_BILLING]: SettingsOrganizationBillingContract;
    [SettingsOrganizationEnum.ORGANIZATION_BRANDING]: SettingsOrganizationBrandingContract;
    [SettingsOrganizationEnum.ORGANIZATION_CONTACT]: SettingsOrganizationContactContract;
    [SettingsOrganizationEnum.ORGANIZATION_IDENTITY]: SettingsOrganizationIdentityContract;
    [SettingsOrganizationEnum.ORGANIZATION_LOCALIZATION]: SettingsOrganizationLocalizationContract;
    [SettingsOrganizationEnum.ORGANIZATION_SECURITY]: SettingsOrganizationSecurityContract;
    [SettingsOrganizationEnum.ORGANIZATION_SEQUENCE]: SettingsOrganizationSequenceContract;
}
export type SettingsOrganizationKey = keyof SettingsOrganizationValueMap;

import { SettingsOrganizationSocialEnum } from "./organization.enum";
import { SettingsKeyEnum } from "./settings.enum";
import type { PaymentAccountReadinessEnum } from "../../integration/payment/account.enum";
import type { SupplierReadinessEnum } from "../../integration/supplier/provider.enum";
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
export type SettingsOrganizationSocialContract = Partial<Record<SettingsOrganizationSocialEnum, string>>;
export interface SettingsOrganizationContactContract {
    email?: string;
    phone?: string;
    social?: SettingsOrganizationSocialContract;
    website?: string;
}
export interface SettingsOrganizationLocalizationContract {
    country?: string;
    currency?: string;
    language?: string;
}
export interface SettingsOrganizationIdentityContract {
    legalName?: string;
    name?: string;
    taxId?: string;
}
export interface SettingsOrganizationBrandingContract {
    description?: string;
    favicon?: string;
    logo?: string;
    ogImage?: string;
    primaryColor?: string;
}
export type SettingsOrganizationBrandingImage = 'favicon' | 'logo' | 'ogImage';
export interface SettingsOrganizationBrandingStoredContract extends SettingsOrganizationBrandingContract {
    keys?: Partial<Record<SettingsOrganizationBrandingImage, string>>;
}
export interface SettingsOrganizationBillingContract {
    email?: string;
}
export interface SettingsOrganizationPaymentsContract {
    holder: {
        type: string;
        name: string;
        email: string;
        documentLast4: string;
    } | null;
    pixKey: {
        type: string;
        value: string;
    } | null;
    error: string | null;
    gateway: {
        provider: string;
        id: string;
        walletId: string;
        apiKey: string | null;
        pixAddressKey: string | null;
        approval: {
            general: string;
            commercialInfo: string;
            documentation: string;
            bankAccountInfo: string;
        } | null;
        createdAt: Date;
        syncedAt: Date;
    } | null;
}
export type SettingsOrganizationSecurityContract = Record<string, unknown>;
export type SettingsOrganizationSequenceContract = Record<string, unknown>;
export interface SettingsOrganizationStoreContract {
    host: string;
    url: string;
}
export interface SettingsOrganizationProfileContract {
    address: SettingsOrganizationAddressContract;
    billing: SettingsOrganizationBillingContract;
    branding: SettingsOrganizationBrandingContract;
    contact: SettingsOrganizationContactContract;
    identity: SettingsOrganizationIdentityContract;
    localization: SettingsOrganizationLocalizationContract;
}
export interface SettingsOrganizationReadinessContract {
    canSell: boolean;
    payments: PaymentAccountReadinessEnum;
    supplier: SupplierReadinessEnum;
}
export interface SettingsOrganizationProfileResponse extends SettingsOrganizationProfileContract {
    readiness: SettingsOrganizationReadinessContract;
    store: SettingsOrganizationStoreContract;
}
export interface SettingsOrganizationValueMap {
    [SettingsKeyEnum.ADDRESS]: SettingsOrganizationAddressContract;
    [SettingsKeyEnum.BILLING]: SettingsOrganizationBillingContract;
    [SettingsKeyEnum.BRANDING]: SettingsOrganizationBrandingStoredContract;
    [SettingsKeyEnum.CONTACT]: SettingsOrganizationContactContract;
    [SettingsKeyEnum.IDENTITY]: SettingsOrganizationIdentityContract;
    [SettingsKeyEnum.LOCALIZATION]: SettingsOrganizationLocalizationContract;
    [SettingsKeyEnum.PAYMENTS]: SettingsOrganizationPaymentsContract;
    [SettingsKeyEnum.SECURITY]: SettingsOrganizationSecurityContract;
    [SettingsKeyEnum.SEQUENCE]: SettingsOrganizationSequenceContract;
}
export type SettingsOrganizationKey = keyof SettingsOrganizationValueMap;

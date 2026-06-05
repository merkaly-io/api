import { AbstractRequestValidator } from '../../abstract.validator';
import type { SettingsOrganizationAddressContract, SettingsOrganizationBillingContract, SettingsOrganizationBrandingContract, SettingsOrganizationContactContract, SettingsOrganizationIdentityContract, SettingsOrganizationLocalizationContract, SettingsOrganizationLocationContract, SettingsOrganizationProfileContract } from './organization.contract';
export declare class UpdateOrganizationLocationRequestValidator extends AbstractRequestValidator {
    lat?: number;
    lng?: number;
    constructor(location?: SettingsOrganizationLocationContract);
}
export declare class UpdateOrganizationAddressRequestValidator extends AbstractRequestValidator {
    city?: string;
    code?: string;
    country?: string;
    line1?: string;
    line2?: string;
    location: UpdateOrganizationLocationRequestValidator;
    state?: string;
    constructor(address?: SettingsOrganizationAddressContract);
}
export declare class UpdateOrganizationContactRequestValidator extends AbstractRequestValidator {
    email?: string;
    phone?: string;
    website?: string;
    constructor(contact?: SettingsOrganizationContactContract);
}
export declare class UpdateOrganizationLocalizationRequestValidator extends AbstractRequestValidator {
    currency?: string;
    constructor(localization?: SettingsOrganizationLocalizationContract);
}
export declare class UpdateOrganizationIdentityRequestValidator extends AbstractRequestValidator {
    legalName?: string;
    name?: string;
    taxId?: string;
    constructor(identity?: SettingsOrganizationIdentityContract);
}
export declare class UpdateOrganizationBrandingRequestValidator extends AbstractRequestValidator {
    description?: string;
    logo?: string;
    constructor(branding?: SettingsOrganizationBrandingContract);
}
export declare class UpdateOrganizationBillingRequestValidator extends AbstractRequestValidator {
    email?: string;
    constructor(billing?: SettingsOrganizationBillingContract);
}
export declare class UpdateOrganizationProfileRequestValidator extends AbstractRequestValidator {
    address: UpdateOrganizationAddressRequestValidator;
    billing: UpdateOrganizationBillingRequestValidator;
    branding: UpdateOrganizationBrandingRequestValidator;
    contact: UpdateOrganizationContactRequestValidator;
    identity: UpdateOrganizationIdentityRequestValidator;
    localization: UpdateOrganizationLocalizationRequestValidator;
    constructor(profile?: Partial<SettingsOrganizationProfileContract>);
}

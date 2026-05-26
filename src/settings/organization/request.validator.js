"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizationProfileRequestValidator = exports.UpdateOrganizationBillingRequestValidator = exports.UpdateOrganizationBrandingRequestValidator = exports.UpdateOrganizationIdentityRequestValidator = exports.UpdateOrganizationLocalizationRequestValidator = exports.UpdateOrganizationContactRequestValidator = exports.UpdateOrganizationAddressRequestValidator = exports.UpdateOrganizationLocationRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../infrastructure/abstracts/abstract.validator");
class UpdateOrganizationLocationRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    lat;
    lng;
    constructor(location) {
        super();
        this.lat = location?.lat;
        this.lng = location?.lng;
    }
}
exports.UpdateOrganizationLocationRequestValidator = UpdateOrganizationLocationRequestValidator;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateOrganizationLocationRequestValidator.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateOrganizationLocationRequestValidator.prototype, "lng", void 0);
class UpdateOrganizationAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    city;
    code;
    country;
    line1;
    line2;
    location;
    state;
    constructor(address) {
        super();
        this.city = address?.city;
        this.code = address?.code;
        this.country = address?.country;
        this.line1 = address?.line1;
        this.line2 = address?.line2;
        this.location = new UpdateOrganizationLocationRequestValidator(address?.location);
        this.state = address?.state;
    }
}
exports.UpdateOrganizationAddressRequestValidator = UpdateOrganizationAddressRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "line1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "line2", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationLocationRequestValidator),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", UpdateOrganizationLocationRequestValidator)
], UpdateOrganizationAddressRequestValidator.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationAddressRequestValidator.prototype, "state", void 0);
class UpdateOrganizationContactRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    email;
    phone;
    website;
    constructor(contact) {
        super();
        this.email = contact?.email;
        this.phone = contact?.phone;
        this.website = contact?.website;
    }
}
exports.UpdateOrganizationContactRequestValidator = UpdateOrganizationContactRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationContactRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationContactRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationContactRequestValidator.prototype, "website", void 0);
class UpdateOrganizationLocalizationRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    currency;
    constructor(localization) {
        super();
        this.currency = localization?.currency;
    }
}
exports.UpdateOrganizationLocalizationRequestValidator = UpdateOrganizationLocalizationRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationLocalizationRequestValidator.prototype, "currency", void 0);
class UpdateOrganizationIdentityRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    legalName;
    name;
    taxId;
    constructor(identity) {
        super();
        this.legalName = identity?.legalName;
        this.name = identity?.name;
        this.taxId = identity?.taxId;
    }
}
exports.UpdateOrganizationIdentityRequestValidator = UpdateOrganizationIdentityRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationIdentityRequestValidator.prototype, "legalName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationIdentityRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationIdentityRequestValidator.prototype, "taxId", void 0);
class UpdateOrganizationBrandingRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    description;
    logo;
    constructor(branding) {
        super();
        this.description = branding?.description;
        this.logo = branding?.logo;
    }
}
exports.UpdateOrganizationBrandingRequestValidator = UpdateOrganizationBrandingRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationBrandingRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationBrandingRequestValidator.prototype, "logo", void 0);
class UpdateOrganizationBillingRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    email;
    constructor(billing) {
        super();
        this.email = billing?.email;
    }
}
exports.UpdateOrganizationBillingRequestValidator = UpdateOrganizationBillingRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateOrganizationBillingRequestValidator.prototype, "email", void 0);
class UpdateOrganizationProfileRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    address;
    billing;
    branding;
    contact;
    identity;
    localization;
    constructor(profile) {
        super();
        this.address = new UpdateOrganizationAddressRequestValidator(profile?.address);
        this.billing = new UpdateOrganizationBillingRequestValidator(profile?.billing);
        this.branding = new UpdateOrganizationBrandingRequestValidator(profile?.branding);
        this.contact = new UpdateOrganizationContactRequestValidator(profile?.contact);
        this.identity = new UpdateOrganizationIdentityRequestValidator(profile?.identity);
        this.localization = new UpdateOrganizationLocalizationRequestValidator(profile?.localization);
    }
}
exports.UpdateOrganizationProfileRequestValidator = UpdateOrganizationProfileRequestValidator;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationAddressRequestValidator),
    __metadata("design:type", UpdateOrganizationAddressRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationBillingRequestValidator),
    __metadata("design:type", UpdateOrganizationBillingRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "billing", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationBrandingRequestValidator),
    __metadata("design:type", UpdateOrganizationBrandingRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "branding", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationContactRequestValidator),
    __metadata("design:type", UpdateOrganizationContactRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationIdentityRequestValidator),
    __metadata("design:type", UpdateOrganizationIdentityRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "identity", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOrganizationLocalizationRequestValidator),
    __metadata("design:type", UpdateOrganizationLocalizationRequestValidator)
], UpdateOrganizationProfileRequestValidator.prototype, "localization", void 0);
//# sourceMappingURL=request.validator.js.map
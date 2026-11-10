import { SaveAccountIdentityRequestValidator } from '../../auth/identity/identity.request.validator';
import { AbstractRequestValidator } from '../../abstract.validator';
export declare class OnboardingCompanyRequestValidator extends AbstractRequestValidator {
    name: string;
    email?: string;
}
export declare class CreateOnboardingRequestValidator extends AbstractRequestValidator {
    company: OnboardingCompanyRequestValidator;
    identity?: SaveAccountIdentityRequestValidator;
}

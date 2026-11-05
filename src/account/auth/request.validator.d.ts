import { AbstractRequestValidator } from '../../abstract.validator';
export declare class LinkIdentityRequestValidator extends AbstractRequestValidator {
    idToken: string;
}
export declare class UnlinkIdentityRequestValidator extends AbstractRequestValidator {
    provider: string;
    userId: string;
}

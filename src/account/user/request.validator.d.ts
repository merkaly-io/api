import { AbstractRequestValidator } from '../../abstract.validator';
import type { AccountUserEntity } from './user.entity';
export declare class UpdateUserRequestValidator extends AbstractRequestValidator {
    name: string;
    picture: string;
    email: string;
    phone?: string;
    active: boolean;
    constructor(user?: AccountUserEntity);
}

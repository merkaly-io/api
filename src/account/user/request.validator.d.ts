import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { AccountUserEntity } from 'src/domain/account/entities/user.entity';
export declare class UpdateUserRequestValidator extends AbstractRequestValidator {
    name: string;
    picture: string;
    email: string;
    phone?: string;
    active: boolean;
    constructor(user?: AccountUserEntity);
}

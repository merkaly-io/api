import { AccountUserEntity } from '../user/user.entity';
import { AbstractEntity } from '../../abstract.entity';
import type { MongoEntity } from '../../abstract.entity';
export declare class AccountPaymentEntity extends AbstractEntity {
    user: MongoEntity<AccountUserEntity>;
    hash: string;
    last4: string;
    brand: string;
    expMonth: number;
    expYear: number;
    holder: string;
}

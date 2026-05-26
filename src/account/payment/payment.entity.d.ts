import { AccountUserEntity } from 'src/domain/account/entities/user.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import type { MongoEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class AccountPaymentEntity extends AbstractEntity {
    user: MongoEntity<AccountUserEntity>;
    hash: string;
    last4: string;
    brand: string;
    expMonth: number;
    expYear: number;
    holder: string;
}

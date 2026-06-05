import { AccountUserEntity } from '../user/user.entity';
import { AddressEntity } from '../../address.entity';
import type { MongoEntity } from '../../abstract.entity';
export declare class AccountAddressEntity extends AddressEntity {
    user: MongoEntity<AccountUserEntity>;
    name: string;
}

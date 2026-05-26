import { AccountUserEntity } from 'src/domain/account/entities/user.entity';
import { AddressEntity } from 'src/infrastructure/entities/address.entity';
import type { MongoEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class AccountAddressEntity extends AddressEntity {
    user: MongoEntity<AccountUserEntity>;
    name: string;
}

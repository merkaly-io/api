import { AbstractEntity } from '../../abstract.entity';
export declare class AccountUserEntity extends AbstractEntity {
    _id: string;
    name: string;
    picture: string;
    email: string;
    phone?: string;
    role?: string;
    status: string;
    verified?: boolean;
    providers: string[];
    locale?: string;
    lastIp?: string;
    loginAt?: Date;
}

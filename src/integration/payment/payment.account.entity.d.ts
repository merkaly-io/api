import { Schema as MongoSchema } from 'mongoose';
import { PaymentAccountApprovalEnum, PaymentAccountPersonTypeEnum, PaymentPixKeyTypeEnum } from './account.enum';
export declare class IntegrationPaymentAccountApprovalEntity {
    general: PaymentAccountApprovalEnum;
    commercialInfo: PaymentAccountApprovalEnum;
    documentation: PaymentAccountApprovalEnum;
    bankAccountInfo: PaymentAccountApprovalEnum;
}
export declare const IntegrationPaymentAccountApprovalSchema: MongoSchema<IntegrationPaymentAccountApprovalEntity, import("mongoose").Model<IntegrationPaymentAccountApprovalEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentAccountApprovalEntity, any, {}> & IntegrationPaymentAccountApprovalEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentAccountApprovalEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentAccountApprovalEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<IntegrationPaymentAccountApprovalEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IntegrationPaymentAccountWithdrawalEntity {
    pixKeyType: PaymentPixKeyTypeEnum;
    pixKey: string;
}
export declare const IntegrationPaymentAccountWithdrawalSchema: MongoSchema<IntegrationPaymentAccountWithdrawalEntity, import("mongoose").Model<IntegrationPaymentAccountWithdrawalEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentAccountWithdrawalEntity, any, {}> & IntegrationPaymentAccountWithdrawalEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentAccountWithdrawalEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentAccountWithdrawalEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<IntegrationPaymentAccountWithdrawalEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IntegrationPaymentAccountPixEntity {
    ready: boolean;
    error?: string | null;
    checkedAt: Date;
}
export declare const IntegrationPaymentAccountPixSchema: MongoSchema<IntegrationPaymentAccountPixEntity, import("mongoose").Model<IntegrationPaymentAccountPixEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentAccountPixEntity, any, {}> & IntegrationPaymentAccountPixEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentAccountPixEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentAccountPixEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<IntegrationPaymentAccountPixEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IntegrationPaymentAccountEntity {
    accountId: string;
    walletId: string;
    apiKey?: string | null;
    personType: PaymentAccountPersonTypeEnum;
    documentMasked: string;
    name: string;
    email: string;
    approval?: IntegrationPaymentAccountApprovalEntity | null;
    pix?: IntegrationPaymentAccountPixEntity | null;
    withdrawal?: IntegrationPaymentAccountWithdrawalEntity | null;
    createdAt: Date;
    syncedAt: Date;
}
export declare const IntegrationPaymentAccountSchema: MongoSchema<IntegrationPaymentAccountEntity, import("mongoose").Model<IntegrationPaymentAccountEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentAccountEntity, any, {}> & IntegrationPaymentAccountEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentAccountEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentAccountEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<IntegrationPaymentAccountEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

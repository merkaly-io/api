import { Schema as MongoSchema } from 'mongoose';
import { PaymentBankAccountTypeEnum, PaymentRecipientStatusEnum, PaymentRecipientTypeEnum, PaymentTransferIntervalEnum } from './recipient.enum';
export declare class IntegrationPaymentRecipientBankEntity {
    bank: string;
    branch: string;
    accountLast4: string;
    type: PaymentBankAccountTypeEnum;
}
export declare const IntegrationPaymentRecipientBankSchema: MongoSchema<IntegrationPaymentRecipientBankEntity, import("mongoose").Model<IntegrationPaymentRecipientBankEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentRecipientBankEntity, any, {}> & IntegrationPaymentRecipientBankEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentRecipientBankEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentRecipientBankEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IntegrationPaymentRecipientBankEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IntegrationPaymentRecipientTransferEntity {
    enabled: boolean;
    interval: PaymentTransferIntervalEnum;
    day: number;
}
export declare const IntegrationPaymentRecipientTransferSchema: MongoSchema<IntegrationPaymentRecipientTransferEntity, import("mongoose").Model<IntegrationPaymentRecipientTransferEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentRecipientTransferEntity, any, {}> & IntegrationPaymentRecipientTransferEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentRecipientTransferEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentRecipientTransferEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IntegrationPaymentRecipientTransferEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class IntegrationPaymentRecipientEntity {
    recipientId: string;
    type: PaymentRecipientTypeEnum;
    documentMasked: string;
    name: string;
    status: PaymentRecipientStatusEnum;
    kycStatus?: string | null;
    kycStatusReason?: string | null;
    bank?: IntegrationPaymentRecipientBankEntity | null;
    transferSettings?: IntegrationPaymentRecipientTransferEntity | null;
    createdAt?: Date | null;
    syncedAt: Date;
}
export declare const IntegrationPaymentRecipientSchema: MongoSchema<IntegrationPaymentRecipientEntity, import("mongoose").Model<IntegrationPaymentRecipientEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentRecipientEntity, any, {}> & IntegrationPaymentRecipientEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentRecipientEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentRecipientEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IntegrationPaymentRecipientEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

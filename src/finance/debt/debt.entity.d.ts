import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from "../../abstract.entity";
import { FinanceDebtReasonEnum, FinanceDebtStatusEnum } from './debt.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
import { FinanceWithdrawalEntity } from '../withdrawal/withdrawal.entity';
export declare class FinanceDebtHistoryEntity {
    date: Date;
    status: FinanceDebtStatusEnum;
    withdrawal?: FinanceWithdrawalEntity | string | null;
}
export declare const FinanceDebtHistorySchema: MongoSchema<FinanceDebtHistoryEntity, import("mongoose").Model<FinanceDebtHistoryEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceDebtHistoryEntity, any, {}> & FinanceDebtHistoryEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceDebtHistoryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceDebtHistoryEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceDebtHistoryEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceDebtCollectedEntity {
    withdrawal: FinanceWithdrawalEntity | string;
}
export declare const FinanceDebtCollectedSchema: MongoSchema<FinanceDebtCollectedEntity, import("mongoose").Model<FinanceDebtCollectedEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceDebtCollectedEntity, any, {}> & FinanceDebtCollectedEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceDebtCollectedEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceDebtCollectedEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceDebtCollectedEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceDebtEntity extends AbstractEntity {
    amount: number;
    reason: FinanceDebtReasonEnum;
    payment: FinancePaymentEntity | string;
    status: FinanceDebtStatusEnum;
    history: FinanceDebtHistoryEntity[];
    collected?: FinanceDebtCollectedEntity | null;
}

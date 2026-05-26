import { Schema, Types } from 'mongoose';
type EnumSource = Record<string, string> | readonly string[];
interface StatusPluginOptions {
    default: string;
    enum: EnumSource;
}
export interface StatusEntity<TEnum extends string = string> {
    _id: Types.ObjectId;
    date: Date;
    name: TEnum;
    user: string;
}
export declare function statusPlugin(schema: Schema, options: StatusPluginOptions): void;
export {};

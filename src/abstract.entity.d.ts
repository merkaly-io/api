import { Document } from 'mongoose';
import type { SchemaOptions } from '@nestjs/mongoose/dist/decorators/schema.decorator';
export declare const $collection: SchemaOptions;
export declare const $subdocument: SchemaOptions;
export type MongoEntity<T extends AbstractEntity> = T | string;
export declare abstract class AbstractEntity extends Document<string> {
    _id: string;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    toString(): string;
}

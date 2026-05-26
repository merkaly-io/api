import { AbstractEntity } from './abstract.entity';
import type { FilterQuery, PopulateOptions, SortOrder } from 'mongoose';
declare class PaginationValidator {
    limit?: number;
    page?: number;
}
export type AbstractEntityValidator = Record<string, any>;
export declare abstract class AbstractRequestValidator {
}
export declare class ReadValidator extends AbstractRequestValidator {
    join?: PopulateOptions[];
    select?: string;
}
export declare class SearchValidator<E = AbstractEntity> extends ReadValidator {
    pagination?: PaginationValidator;
    sort?: {
        [key: string]: SortOrder;
    };
    filters?: FilterQuery<E>;
}
export {};

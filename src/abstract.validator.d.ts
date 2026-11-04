import { AbstractEntity } from './abstract.entity';
import type { FilterQuery, PopulateOptions, SortOrder } from 'mongoose';
declare class PaginationValidator {
    limit?: number;
    page?: number;
}
export type AbstractEntityValidator = Record<string, any>;
export declare abstract class AbstractRequestValidator {
}
export interface ReadRules {
    join: readonly string[];
}
export declare class ReadValidator extends AbstractRequestValidator {
    static readonly rules: ReadRules;
    join?: PopulateOptions[];
    select?: string;
}
export interface SearchRules extends ReadRules {
    filters: readonly string[];
    sort?: readonly string[];
}
export declare class SearchValidator<E = AbstractEntity> extends ReadValidator {
    static readonly rules: SearchRules;
    pagination?: PaginationValidator;
    sort?: {
        [key: string]: SortOrder;
    };
    filters?: FilterQuery<E>;
}
export {};

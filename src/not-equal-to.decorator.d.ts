import { ValidationOptions } from 'class-validator';
export declare function IsNotEqualTo<T = any>(fn: (it: T) => any, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;

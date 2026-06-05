import type { AbstractEntity } from './abstract.entity';
import type { Document } from 'mongoose';

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type SystemKeys = '_id' | 'createdAt' | 'updatedAt' | 'deletedAt' | keyof Document;

export type SaveEntityArgs<T> = {
  [K in keyof T as K extends SystemKeys ? never : T[K] extends Function ? never : Equal<{
    [Q in K]: T[K];
  }, {
    -readonly [Q in K]: T[K];
  }> extends true ? K : never]: T[K] extends AbstractEntity ? SaveEntityArgs<T[K]> : T[K];
};

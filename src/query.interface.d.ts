export interface MetaPagination {
    currentPage: number;
    nextPage: number | null;
    pageLimit: number;
    pageSize: number;
    prevPage: number | null;
    totalItems: number;
    totalPages: number;
}
export interface JoinPath {
    path: string;
    populate?: JoinOption[];
}
export type JoinOption = JoinPath | string;

import type { ContentFeatureIconEnum } from './page.enum';
export interface ContentImage {
    key: string;
    url: string;
}
export interface ContentAction {
    label?: string;
    url?: string;
}
export interface ContentBannerBlock {
    action?: ContentAction;
    enabled?: boolean;
    image?: ContentImage;
    subtitle?: string;
    title?: string;
}
export interface ContentProductsBlock {
    enabled?: boolean;
    title?: string;
}
export interface ContentFeatureItem {
    icon: ContentFeatureIconEnum;
    text: string;
    title: string;
}
export interface ContentFeaturesBlock {
    enabled?: boolean;
    items?: ContentFeatureItem[];
}
export interface ContentBrandsBlock {
    brands?: string[];
    enabled?: boolean;
}

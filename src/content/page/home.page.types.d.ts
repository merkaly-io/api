import type { ContentBannerBlock, ContentBrandsBlock, ContentFeaturesBlock, ContentProductsBlock } from './blocks.types';
export interface ContentHomePage {
    brands?: ContentBrandsBlock;
    features?: ContentFeaturesBlock;
    hero?: ContentBannerBlock;
    newArrivals?: ContentProductsBlock & {
        banner?: ContentBannerBlock;
    };
    offers?: ContentProductsBlock & {
        endsAt?: Date;
    };
    sale?: ContentBannerBlock & {
        code?: string;
    };
    trending?: ContentProductsBlock;
}

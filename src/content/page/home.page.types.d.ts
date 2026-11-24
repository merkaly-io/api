import type { ContentAnnouncementBlock, ContentBannerBlock, ContentBrandsBlock, ContentCollectionsBlock, ContentFeaturesBlock, ContentFooterBlock, ContentHeroBlock, ContentNewsletterBlock, ContentProductsBlock } from "./blocks.types";
export interface ContentHomePage {
    announcement?: ContentAnnouncementBlock;
    brands?: ContentBrandsBlock;
    collections?: ContentCollectionsBlock;
    features?: ContentFeaturesBlock;
    footer?: ContentFooterBlock;
    hero?: ContentHeroBlock;
    newArrivals?: ContentProductsBlock & {
        banner?: ContentBannerBlock;
    };
    newsletter?: ContentNewsletterBlock;
    offers?: ContentProductsBlock & {
        endsAt?: Date;
    };
    sale?: ContentBannerBlock & {
        code?: string;
    };
    trending?: ContentProductsBlock;
}

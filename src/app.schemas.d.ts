export declare abstract class AppSchemas {
    static get account(): {
        users: string;
    };
    static get assets(): {
        files: string;
    };
    static get contact(): {
        customers: string;
        vendors: string;
    };
    static get finance(): {
        payments: string;
        subscriptions: string;
        taxes: string;
    };
    static get inventory(): {
        catalog: {
            brands: string;
            categories: string;
            products: string;
            variants: string;
        };
    };
    static get order(): {
        purchaseItems: string;
        purchases: string;
        saleItems: string;
        sales: string;
    };
    static get integration(): {
        suppliers: string;
    };
    static get settings(): {
        organizations: string;
    };
}

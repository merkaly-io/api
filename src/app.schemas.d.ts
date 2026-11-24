export declare abstract class AppSchemas {
    static get account(): {
        users: string;
    };
    static get assets(): {
        files: string;
    };
    static get contact(): {
        customers: string;
        newsletterSubscriptions: string;
        vendors: string;
    };
    static get content(): {
        pages: string;
    };
    static get finance(): {
        chargebacks: string;
        debts: string;
        payments: string;
        refunds: string;
        subscriptions: string;
        taxes: string;
        withdrawals: string;
    };
    static get catalog(): {
        brands: string;
        categories: string;
        products: string;
        variants: string;
    };
    static get logistics(): {
        shipments: string;
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
    static get settings(): string;
}

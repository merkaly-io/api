export declare abstract class AppSchemas {
    static get account(): {
        addresses: string;
        payments: string;
        users: string;
    };
    static get assets(): {
        files: string;
    };
    static get finance(): {
        invoices: string;
        payments: string;
        refunds: string;
        subscriptions: string;
        taxes: string;
    };
    static get inventory(): {
        catalog: {
            attributes: string;
            brands: string;
            categories: string;
            collections: string;
            products: string;
            variants: string;
        };
        configuration: {
            measurements: string;
        };
        stock: {
            balances: string;
            transfers: string;
            warehouses: string;
        };
    };
    static get order(): {
        purchase: {
            items: string;
            transactions: string;
            vendors: string;
        };
        sale: {
            customers: string;
            items: string;
            transactions: string;
        };
        service: {
            items: string;
            transactions: string;
        };
    };
    static get settings(): {
        organizations: string;
    };
}

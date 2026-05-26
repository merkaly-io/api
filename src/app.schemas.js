"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSchemas = void 0;
class AppSchemas {
    static get account() {
        return {
            addresses: 'account.addresses',
            payments: 'account.payments',
            users: 'account.users',
        };
    }
    static get assets() {
        return {
            files: 'assets.files',
        };
    }
    static get finance() {
        return {
            invoices: 'finance.invoices',
            payments: 'finance.payments',
            refunds: 'finance.refunds',
            subscriptions: 'finance.subscriptions',
            taxes: 'finance.taxes',
        };
    }
    static get inventory() {
        return {
            catalog: {
                attributes: 'inventory.catalog.attributes',
                brands: 'inventory.catalog.brands',
                categories: 'inventory.catalog.categories',
                collections: 'inventory.catalog.collections',
                products: 'inventory.catalog.products',
                variants: 'inventory.catalog.variants',
            },
            configuration: {
                measurements: 'inventory.configuration.measurements',
            },
            stock: {
                balances: 'inventory.stock.balances',
                transfers: 'inventory.stock.transfers',
                warehouses: 'inventory.stock.warehouses',
            },
        };
    }
    static get order() {
        return {
            purchase: {
                items: 'order.purchase.items',
                transactions: 'order.purchase.transactions',
                vendors: 'order.purchase.vendors',
            },
            sale: {
                customers: 'order.sale.customers',
                items: 'order.sale.items',
                transactions: 'order.sale.transactions',
            },
            service: {
                items: 'order.service.items',
                transactions: 'order.service.transactions',
            },
        };
    }
    static get settings() {
        return {
            organizations: 'settings.organizations',
        };
    }
}
exports.AppSchemas = AppSchemas;
//# sourceMappingURL=app.schemas.js.map
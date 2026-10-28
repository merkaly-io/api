"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSchemas = void 0;
class AppSchemas {
    static get account() {
        return {
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
            payments: 'finance.payments',
            subscriptions: 'finance.subscriptions',
            taxes: 'finance.taxes',
        };
    }
    static get inventory() {
        return {
            catalog: {
                brands: 'inventory.catalog.brands',
                categories: 'inventory.catalog.categories',
                products: 'inventory.catalog.products',
                variants: 'inventory.catalog.variants',
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
    static get supplier() {
        return {
            sources: 'supplier.sources',
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
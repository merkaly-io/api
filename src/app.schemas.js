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
    static get contact() {
        return {
            customers: 'contact.customers',
            newsletterSubscriptions: 'contact.newsletter.subscriptions',
            vendors: 'contact.vendors',
        };
    }
    static get content() {
        return {
            pages: 'content.pages',
        };
    }
    static get finance() {
        return {
            chargebacks: 'finance.chargebacks',
            debts: 'finance.debts',
            payments: 'finance.payments',
            refunds: 'finance.refunds',
            subscriptions: 'finance.subscriptions',
            taxes: 'finance.taxes',
            withdrawals: 'finance.withdrawals',
        };
    }
    static get catalog() {
        return {
            brands: 'catalog.brands',
            categories: 'catalog.categories',
            products: 'catalog.products',
            variants: 'catalog.variants',
        };
    }
    static get logistics() {
        return {
            shipments: 'logistics.shipments',
        };
    }
    static get order() {
        return {
            purchaseItems: 'order.purchase.items',
            purchases: 'order.purchases',
            saleItems: 'order.sale.items',
            sales: 'order.sales',
        };
    }
    static get integration() {
        return {
            suppliers: 'integration.suppliers',
        };
    }
    static get settings() {
        return 'settings';
    }
}
exports.AppSchemas = AppSchemas;
//# sourceMappingURL=app.schemas.js.map
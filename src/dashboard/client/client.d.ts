import type { AccountAuthOrganization, AccountAuthOrganizationInvitation, AccountAuthOrganizationMember } from '../../account/auth/auth';
export interface DashboardClientList {
    items: AccountAuthOrganization[];
    total: number;
}
export interface DashboardClientDetail {
    invitations: AccountAuthOrganizationInvitation[];
    members: AccountAuthOrganizationMember[];
    organization: AccountAuthOrganization;
}
export interface DashboardClientRole {
    id: string;
    name: string;
}
export interface DashboardClientBillingPlan {
    amount: number | null;
    currency: string | null;
    interval: string | null;
    name: string | null;
}
export interface DashboardClientBillingSubscription {
    cancelAtPeriodEnd: boolean;
    currentPeriodEnd: number | null;
    id: string;
    plan: DashboardClientBillingPlan;
    status: string;
}
export interface DashboardClientBilling {
    customer: {
        email: string | null;
        id: string;
        name: string | null;
    } | null;
    linked: boolean;
    subscriptions: DashboardClientBillingSubscription[];
}

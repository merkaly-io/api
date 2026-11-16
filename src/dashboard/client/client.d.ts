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

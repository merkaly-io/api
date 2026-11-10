import type { AccountTeamAssignableRole } from './team.enum';
export interface AccountAuthIdentity {
    connection: string;
    isSocial: boolean;
    profileData?: {
        email?: string;
        name?: string;
    };
    provider: string;
    user_id: string | number;
}
export interface AccountAuthConnection {
    id: string;
    name: string;
    strategy: string;
}
export interface AccountAuthProfile {
    customAvatar: boolean;
    email?: string;
    emailVerified?: boolean;
    locale?: string;
    name?: string;
    phone?: string;
    picture?: string;
}
export interface AccountIdentityProfile {
    birthDate: string;
    cpf: string;
    name: string;
}
export interface OnboardingResult {
    organization: string;
}
export interface AccountAuthPasswordTicket {
    ticket: string;
}
export interface AccountAuthOrganizationMetadata {
    CONTACT_EMAIL?: string | null;
    email?: string | null;
    ORG_COUNTRY?: string | null;
    ORG_CURRENCY?: string | null;
    ORG_EMAIL?: string | null;
    ORG_SIZE?: string | null;
    ORG_TYPE?: string | null;
    [key: string]: string | null | undefined;
}
export interface AccountAuthOrganization {
    branding?: {
        logo_url?: string;
    };
    display_name?: string;
    id?: string;
    metadata?: AccountAuthOrganizationMetadata;
    name?: string;
}
export interface AccountAuthOrganizationMember {
    email?: string;
    name?: string;
    picture?: string;
    roles?: {
        id?: string;
        name?: string;
    }[];
    user_id?: string;
}
export interface AccountAuthOrganizationInvitation {
    created_at?: string;
    expires_at?: string;
    id?: string;
    invitee?: {
        email: string;
    };
    inviter?: {
        name: string;
    };
    roles?: string[];
}
export interface AccountTeamInvitation {
    createdAt?: string;
    email: string;
    expiresAt?: string;
    id: string;
    inviter?: string;
    role?: string;
}
export interface AccountTeamInvitationPayload {
    email: string;
    role: AccountTeamAssignableRole;
}
export interface AccountTeamMemberRolePayload {
    role: AccountTeamAssignableRole;
}

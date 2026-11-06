export interface Auth0JwtPayload {
    sub: string;
    iat: number;
    exp: number;
    iss: string;
    aud: string | string[];
    azp?: string;
    org_id?: string;
    'https://merka.ly/authorization'?: {
        roles: string[];
        permissions?: string[];
    };
}
export interface AppAuth {
    clientId?: string;
    expiresAt: Date;
    issuedAt: Date;
    orgId?: string;
    role: string;
    userId: string;
}
export declare const SESSION_COOKIE = "merkaly.sid";

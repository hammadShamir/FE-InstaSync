import { ReactNode } from "react";

export interface RouteConfig {
    path: string;
    component: React.ReactNode;
    breadcrumb?: string;
    isPrivate?: boolean;
    isPublic?: boolean;
    children?: RouteConfig[];
}

export interface PrivateRouteProps {
    children: ReactNode;
    route?: string;
    isAuthenticated: boolean;
}

export interface PublicRouteProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
}
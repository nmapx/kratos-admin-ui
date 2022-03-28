import { Configuration } from "@ory/kratos-client";

export interface Config {
    kratosAdminURL: string;
    kratosPublicURL: string;
    version: string;
}

export const CONFIG: Config = {
    kratosAdminURL: isProd() ? process.env.REACT_APP_KRATOS_ADMIN_URL! : "http://localhost:4435", //use cors-proxy
    kratosPublicURL: isProd() ? process.env.REACT_APP_KRATOS_PUBLIC_URL! : "http://localhost:4430", //use cors-proxy
    version: "0.2.0"
}

export const KRATOS_ADMIN_CONFIG: Configuration = new Configuration({ basePath: CONFIG.kratosAdminURL, baseOptions: { withCredentials: true } });
export const KRATOS_PUBLIC_CONFIG: Configuration = new Configuration({ basePath: CONFIG.kratosPublicURL, baseOptions: { withCredentials: true } });


function isProd() {
    return process.env.NODE_ENV === "production"
}
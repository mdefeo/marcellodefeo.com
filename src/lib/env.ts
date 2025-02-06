// /src/config/constants/env.ts
import dotenv from "dotenv";

const envFile =
  process.env.NODE_ENV === "development" ? ".env.development" : ".env";
dotenv.config({ path: envFile });

export const APP_ENV = process.env.APP_ENV || "development";
export const APP_DEBUG = process.env.APP_DEBUG === "true";
export const APP_DOMAIN = process.env.APP_DOMAIN || "http://localhost";
export const PORT = process.env.PORT || "3000";
export const APP_URL = `${APP_DOMAIN}:${PORT}`;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const IS_PRODUCTION = NODE_ENV === "production";
export const IS_DEVELOPMENT = NODE_ENV === "development";
export const DEBUG_MODE = !IS_PRODUCTION;
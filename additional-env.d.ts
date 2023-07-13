declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            NEXT_PUBLIC_W3C_PID: string;
            NEXT_PUBLIC_ALCHEMY_API_KEY: string;
        }
    }
}

export {};
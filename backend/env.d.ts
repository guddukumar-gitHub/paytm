declare module "bun" {
  interface Env {
    MONGODB_URI: string;
    PORT: number;
    JWT_SECRET: string;
  }
}

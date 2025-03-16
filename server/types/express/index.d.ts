import "express";

declare module "express-serve-static-core" {
  interface Request {
    user: any;
    session: any;
    sessionID: any;
    isAuthenticated(): boolean;
    logout(callback?: (err?: any) => void): void;
  }
}

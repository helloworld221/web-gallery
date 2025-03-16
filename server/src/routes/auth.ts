import express, { Request, Response } from "express";
import passport from "passport";
import { env } from "../config/env";
import {
  getCurrentUserHandler,
  logoutHandler,
} from "../controllers/authControllers";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: env.CLIENT_URL + "/login?error=authfailed",
    session: true,
  }),
  (req: Request, res: Response) => {
    req.session.save((err) => {
      if (err) {
        console.error("Error saving session:", err);
      }
      res.redirect(env.CLIENT_URL || "http://localhost:3000");
    });
  }
);

router.get("/current-user", (req: Request, res: Response) => {
  getCurrentUserHandler(req, res);
});

router.get("/logout", logoutHandler);

export default router;

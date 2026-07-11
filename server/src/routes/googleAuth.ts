import { Router } from "express";
import passport from "../config/passport";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD, FRONTEND_URL } from "../config/config";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const user = req.user as any;

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_PASSWORD
    );

    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

    res.redirect(`${FRONTEND_URL}/dashboard`);
  }
);

export default router;
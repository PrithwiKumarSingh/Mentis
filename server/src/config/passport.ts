import passport from "passport";
import { Strategy as GoogleStrategy, Profile , VerifyCallback} from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "./config";
import { User } from "../Schema/user";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {
  try {
    const googleId = profile.id;
    const email = profile.emails?.[0]?.value;
    const name = profile.displayName;
    const avatar = profile.photos?.[0]?.value ?? "";

    if (!email) {
      return done(new Error("Google account has no email"));
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        googleId,
        name,
        email,
        avatar,
      });
    }

    return done(null, user);
  } catch (err) {
    return done(err as Error);
  }
}
  )
);

export default passport;
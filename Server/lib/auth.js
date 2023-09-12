import passport from "passport";
import passportlocal from "passport-local";

// export const initlialize = passport.initialize();
// export const session = passport.session();
const LocalStrategy = passportlocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (username, password, done) => {
      try {
        //logic for authentication
      } catch (error) {
        done(error);
      }
    }
  )
);

export const auth = {
  initlialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    res.local.user = req.user;
    return next();
  },
};

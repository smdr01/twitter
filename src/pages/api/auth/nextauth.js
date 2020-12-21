import Providers from `next-auth/providers`;
import NextAuth from 'next-auth';
const options = {
providers: [
  Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    authorize: async (credentials) => {
      const user = (credentials) => {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        return { id: 1, name: 'J Smith', email: 'jsmith@example.com' };
      }
      if (user) {
        // Any user object returned here will be saved in the JSON Web Token
        return Promise.resolve(user)
      } else {
        return Promise.resolve(null)
      }
    }
  })
],
session: {
  // Use JSON Web Tokens for session instead of database sessions.
  // This option can be used with or without a database for users/accounts.
  // Note: `jwt` is automatically set to `true` if no database is specified.
   jwt: true,
  // Seconds - How long until an idle session expires and is no longer valid.
   maxAge: 30 * 24 * 60 * 60, // 30 days
  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
   updateAge: 24 * 60 * 60 // 24 hours
},

callbacks: {
  /**
   * Intercept signIn request and return true if the user is allowed.
   *
   * @link https://next-auth.js.org/configuration/callbacks#sign-in-callback
   * @param  {object} user     User object
   * @param  {object} account  Provider account
   * @param  {object} profile  Provider profile
   * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
   *                           Return `false` to deny access
   */
  signIn: async (user, account, profile) => {
    return true
  },

  /**
   * @link https://next-auth.js.org/configuration/callbacks#session-callback
   * @param  {object} session      Session object
   * @param  {object} user         User object    (if using database sessions)
   *                               JSON Web Token (if not using database sessions)
   * @return {object}              Session that will be returned to the client
   */
  session: async (session, user) => {
    //session.customSessionProperty = 'bar'
    return Promise.resolve(session)
  },

  /**
   * @link https://next-auth.js.org/configuration/callbacks#jwt-callback
   * @param  {object}  token     Decrypted JSON Web Token
   * @param  {object}  user      User object      (only available on sign in)
   * @param  {object}  account   Provider account (only available on sign in)
   * @param  {object}  profile   Provider profile (only available on sign in)
   * @param  {boolean} isNewUser True if new user (only available on sign in)
   * @return {object}            JSON Web Token that will be saved
   */
  jwt: async (token, user, account, profile, isNewUser) => {
    //const isSignIn = (user) ? true : false
    // Add auth_time to token on signin in
    //if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
    return Promise.resolve(token)
  },
},

}

export default (req, res) => NextAuth(req, res, options)

import auth0 from 'auth0-js';
import Keys from './../../utils/keys'
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: Keys.AUTH0.DOMAIN,
    clientID: Keys.AUTH0.CLIENT_ID,
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : Keys.AUTH0.REDIRECT_URI,
    /*audience: Keys.AUTH0.AUDIENCE,*/
    responseType: Keys.AUTH0.RESPONSE_TYPE,
    scope: Keys.AUTH0.SCOPE,
  });

  userProfile;

  login = () => {
    this.auth0.authorize();
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return false
    }
    return accessToken;
  }

  getProfile = (cb) => {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (res, rej) => {
        setTimeout(() => {
          res(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

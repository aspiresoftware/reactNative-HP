import AuthRefreshService from './auth-refresh.service';

class ErrorNotifier {
  notifyError = (error) => {
    if (error && error.error_description) {
      if (error.error_description.indexOf('Access token expired') > -1 || error.error_description.indexOf('Invalid access token') > -1) {
        console.log('The authentication session expires');
        var authRefreshService = new AuthRefreshService;
        authRefresherService.interceptSessionExpired();
      }
    }
  }
}
export default ErrorNotifier;
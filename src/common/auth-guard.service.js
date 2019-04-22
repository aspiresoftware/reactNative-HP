import  LocalStorageService  from "./local-storage.service";

class AuthGuardService {
    localStorageService = new LocalStorageService

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //         if ((localStorage.getItem('auth') && localStorage.getItem('user'))) {
    //           // logged in so return true
    //           return true;
    //         }    
    //         // not logged in so redirect to login page with the return url
    //         this.utilityService.navigateToState(this.configuration.STATES.login);
    //         return false;
    // }
}
export default AuthGuardService;
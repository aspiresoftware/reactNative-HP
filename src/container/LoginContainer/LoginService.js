import Environment from "../../common/environments";
import Delegator from "../../common/delegator.service";

class LoginService {

    /** This service will authenticate the user and returns the response based on the credentials user has entered
     * 
     * @param {*} user 
     * @param {*} successCallback 
     * @param {*} errorCallback 
     */
    async authenticateUser(user, successCallback, errorCallback) {
        let delegator = new Delegator();
        const url =
            Environment.SERVER +
            Environment.RESTURL.authenticationUrl;
        await delegator._post(user, url, successCallback, errorCallback);
    }
}
export default LoginService;
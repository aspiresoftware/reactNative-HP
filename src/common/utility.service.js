import ErrorNotifier from './error-notifier.service';
import LocalStorageService from "./local-storage.service";
import DeviceInfo from 'react-native-device-info';

class UtilityService {
    localStorageService = new LocalStorageService;

    handleError = (error) => {
        // this.loggingAspect.invokeOnThrowOfMethod(error);
        var errorNotifier = new ErrorNotifier;
        errorNotifier.notifyError(error);
    }

    isLoggedIn = () => {
        if (this.localStorageService.getValue('accessToken')) {
            return true;
        } else {
            return false;
        }
    }

    navigateToState = (state) => {
        // this._router.navigate([state]);
    }
    /**
     * function will return the device unique id
     */
    getUniqueID = () => {
        return DeviceInfo.getUniqueID();
    }

}
export default UtilityService;
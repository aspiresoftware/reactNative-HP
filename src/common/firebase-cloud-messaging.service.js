'use strict';
import firebase from "react-native-firebase";

class Messaging {
    //     subscribeToTopic: subscribeToTopic,
    //     unsubscribeFromTopic: unsubscribeFromTopic,
    //     getInitialNotification: getInitialNotification,
    //     getToken: getToken,
    //     deleteInstanceId: deleteInstanceId,
    //     onTokenRefresh: onTokenRefresh,
    //     onMessage: onMessage,
    //     requestPermissions: requestPermissions,
    //     setBadgeNumber: setBadgeNumber,
    //     getBadgeNumber: getBadgeNumber
    // };

    /**
     * Subscribes the device to a topic.
     * topic: string
     */
    subscribeToTopic = (topic) => {
        firebase.messaging().subscribeToTopic(topic);
    };

    /**
     * Unsubscribes the device to a topic.
     * topic: string
     */
    unsubscribeFromTopic = (topic) => {
        firebase.messaging().unsubscribeFromTopic(topic);
    }

    /**
     * When the application has been opened from a notification,
     * getInitialNotification is called and the notification payload is returned.
     * Use messaging#onMessage for notifications when the app is running.
     */
    getInitialNotification = () => {
        return firebase.messaging().getInitialNotification();
    }

    /**
     * Returns the devices FCM token.
     * This token can be used in the Firebase console to send messages to directly.
     */
    getToken = () => {
        return firebase.messaging().getToken();
    }

    /**
     * Reset Instance ID and revokes all tokens.
    */
    deleteInstanceId = () => {
        return firebase.messaging().deleteInstanceId();
    }

    /**
     * On the event a devices FCM token is refreshed by Google, the new token is returned in a callback listener.
     * listener: (string) A listener  called when a new token is generated.
    return */
    onTokenRefresh = (listener) => {
        return firebase.messaging().onTokenRefresh(listener);
    }

    /**
     * On a new message, the payload object is passed to the listener callback.
     * This method is only triggered when the app is running.
     * Use messaging#getInitialNotification for notifications which cause the app to open.
    */
    onMessage = (onMsg) => {
        return firebase.messaging().onMessage(onMsg);
    }

    /**
     * Requests app notification permissions in an Alert dialog.
    */
    requestPermissions = () => {
        firebase.messaging().requestPermissions();
    }

    /**
     * Sets the badge number on the app icon.
     * value: number
    */
    setBadgeNumber = (value) => {
        firebase.messaging().setBadgeNumber(value);
    }

    /**
     * Returns the current badge number on the app icon.
    */
    getBadgeNumber = () => {
        return firebase.messaging().getBadgeNumber();
    }
}

export default Messaging;
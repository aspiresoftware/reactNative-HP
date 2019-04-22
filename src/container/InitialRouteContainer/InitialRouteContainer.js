import React, { Component } from 'react'
import LocalStorageService from "../../common/local-storage.service";
import { Spinner } from "native-base";
import { View } from 'react-native';

class InitialRouteContainer extends Component {

    render() {
        localStorage = new LocalStorageService;
        initialRoute = '';
        localStorage.getValue('accessToken').then((isLoggedIn) => {
            if (isLoggedIn) {
                this.props.navigation.navigate("Drawer");
            } else {
                this.props.navigation.navigate("Login");
            }
        }, (error) => {
            console.log(error);
        });
        return (
            <View>
                <Spinner></Spinner>
            </View>
        )
    }
}
export default InitialRouteContainer;
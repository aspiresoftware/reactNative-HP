import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import Login from "./container/LoginContainer/LoginContainer";
import Home from "./container/HomeContainer/HomeContainer";
import BlankPage from "./container/BlankPageContainer/BlankPageContainer";
import Sidebar from "./container/SidebarContainer/SidebarContainer";
import InitialRouteContainer from "./container/InitialRouteContainer/InitialRouteContainer";

const Drawer1 = DrawerNavigator({
    Home: { screen: Home },
}, {
        drawerWidth: deviceWidth - 50,
        drawerPosition: "left",
        contentComponent: props => React.createElement(Sidebar, Object.assign({}, props)),
    });
const App = StackNavigator({
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer1 },
    AuthCheck: { screen: InitialRouteContainer }
}, {
        initialRouteName: 'AuthCheck',
        headerMode: "none",
    });
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
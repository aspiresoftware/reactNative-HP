import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";
import LocalStorageService from '../../common/local-storage.service';

const routes = [
    {
        route: "Home",
        caption: "Home",
    },
    {
        route: "BlankPage",
        caption: "Blank Page",
    },
    {
        route: "Login",
        caption: "Logout",
    },
];
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component {
    localStorage = new LocalStorageService;

    render() {
        return (

            <Container>
                <Content>
                    <List style={{ marginTop: 40 }} dataArray={routes} renderRow={data => {
                        return (
                            <ListItem button={true} onPress={() => {
                                data.route === "Login" ? (
                                    localStorage.clearLocalStorage(),
                                    this.props.navigation.dispatch(resetAction)
                                )
                                    : this.props.navigation.navigate(data.route);
                            }}>
                                <Text>{data.caption}</Text>
                            </ListItem>
                        )
                    }}>

                    </List>
                </Content>
            </Container>

            // React.createElement(Container, null,
            //     React.createElement(Content, null,
            //         React.createElement(List, {
            //             style: { marginTop: 40 }, dataArray: routes, renderRow: data => {
            //                 return (React.createElement(ListItem, {
            //                     button: true, onPress: () => {
            //                         data.route === "Login"
            //                             ? this.props.navigation.dispatch(resetAction)
            //                             : this.props.navigation.navigate(data.route);
            //                     }
            //                 },
            //                     React.createElement(Text, null, data.caption)));
            //             }
            //         })))
        );
    }
}
//# sourceMappingURL=index.js.map
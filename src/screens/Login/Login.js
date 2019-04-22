import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Spinner } from "native-base";
class Login extends React.Component {
    render() {
        let isLoadingState;
        if (this.props.isLoading) {
            isLoadingState = <Spinner></Spinner>
        } else {
            isLoadingState = <Button block={true} onPress={() => this.props.onLogin()}>
                <Text>Login</Text>
            </Button>
        }

        return (
            <Container>
                <Header style={{ height: 200 }}>
                    <Body style={{ alignItems: "center" }}>
                        <Icon name="flash" style={{ fontSize: 104 }}></Icon>
                        <Title>React Native Seed</Title>
                        <View padder={true}></View>
                        <Text style={{ color: Platform.os === 'ios' ? '#000' : '#FFF' }}></Text>
                    </Body>
                </Header>
                <Content>
                    {this.props.loginForm}
                    <View padder={true}>
                        {/* <Button block={true} onPress={() => this.props.onLogin()}>
                            <Text>Login</Text>
                        </Button> */}
                        {isLoadingState}
                    </View>
                    <Footer style={{ backgroundColor: '#F8F8F8' }}>
                        <View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
                            <View padder={true}>
                                <Text style={{ color: "#000" }}>Aspire software solutions</Text>
                            </View>
                        </View>
                    </Footer>
                </Content>
            </Container>

            // React.createElement(Container, null,
            //     React.createElement(Header, { style: { height: 200 } },
            //         React.createElement(Body, { style: { alignItems: "center" } },
            //             React.createElement(Icon, { name: "flash", style: { fontSize: 104 } }),
            //             React.createElement(Title, null, "ReactNativeSeed.com"),
            //             React.createElement(View, { padder: true },
            //                 React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } })))),
            //     React.createElement(Content, null,
            //         this.props.loginForm,
            //         React.createElement(View, { padder: true },
            //             React.createElement(Button, { block: true, onPress: () => this.props.onLogin() },
            //                 React.createElement(Text, null, "Login")))),
            //     React.createElement(Footer, { style: { backgroundColor: "#F8F8F8" } },
            //         React.createElement(View, { style: { alignItems: "center", opacity: 0.5, flexDirection: "row" } },
            //             React.createElement(View, { padder: true },
            //                 React.createElement(Text, { style: { color: "#000" } }, "Made with love at ")),
            //         )))


        );
    }
}
export default Login;
//# sourceMappingURL=index.js.map
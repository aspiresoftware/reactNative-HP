import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem } from "native-base";
import styles from "./styles";
class Home extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent={true}>
                            <Icon active={true} name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                        </Button>
                    </Left>
                    <Body style={{ 'flex': 3 }}>
                        <Title>
                            Home
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        {this.props.list.map((item, i) => (
                            <ListItem key={i} onPress={() => this.props.navigation.navigate("BlankPage", { name: { item } })}>
                                <Text>{item}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>



            // React.createElement(Container, { style: styles.container },
            //     React.createElement(Header, null,
            //         React.createElement(Left, null,
            //             React.createElement(Button, { transparent: true },
            //                 React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
            //         React.createElement(Body, null,
            //             React.createElement(Title, null, "Home")),
            //         React.createElement(Right, null)),
            //     React.createElement(Content, null,
            //         React.createElement(List, null, this.props.list.map((item, i) => (React.createElement(ListItem, {
            //             key: i, onPress: () => this.props.navigation.navigate("BlankPage", {
            //                 name: { item }
            //             })
            //         },
            //             React.createElement(Text, null, item)))))))


        );
    }
}
export default Home;
//# sourceMappingURL=index.js.map
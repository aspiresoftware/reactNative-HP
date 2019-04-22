import * as React from "react";
import { Item, Input, Icon, Form, Toast, Spinner, Content } from "native-base";
import { Field, reduxForm, touch } from "redux-form";
import Login from "../../screens/Login/Login";
import LoginService from "./LoginService";
import { connect } from "react-redux";
import { verifyLoginDetails } from './LoginActions';
import UtilityService from '../../common/utility.service';
import Messaging from '../../common/firebase-cloud-messaging.service';
import LocalStorageService from "../../common/local-storage.service";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength5 = minLength(5);
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.loginService = new LoginService;
        this.utilityService = new UtilityService;
        this.messaging = new Messaging;
        this.localStorageservice = new LocalStorageService;
        this.state = {
            isLoading: false
        }
    }

    renderInput({ input, meta: { touched, error } }) {
        return (
            <Item error={error && touched}>
                <Icon active={true} name={input.name === "email" ? "person" : "unlock"}></Icon>
                <Input {...Object.assign({ placeholder: input.name === "email" ? "Email" : "Password", secureTextEntry: input.name === "password" ? true : false }, input)}></Input>
            </Item>
            // React.createElement(Item, { error: error && touched },
            //     React.createElement(Icon, { active: true, name: input.name === "email" ? "person" : "unlock" }),
            //     React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name === "email" ? "Email" : "Password", secureTextEntry: input.name === "password" ? true : false }, input)))
        );
    }
    login() {
        if (this.props.valid) {
            this.setState({ 'isLoading': true });
            let user = {
                username: this.getEmail.value,
                password: this.getPassword.value,
                //TODO: remove following.
                grant_type: 'password',
            }
            // this.props.dispatch(verifyLoginDetails(user)).then(() => {
            //     if (this.props.result) {
            //         this.props.navigation.navigate("Drawer");
            //     } else {
            //         Toast.show({
            //             text: "Please enter valid username & password!",
            //             duration: 2000,
            //             position: "top",
            //             textStyle: { textAlign: "center" },
            //         });
            //         console.log('User not found')
            //     }
            // }
            // );
            // { }
            //call the Login API
            this.loginService.authenticateUser(user, this.loginSuccess, this.loginFailure)
            // this.props.navigation.navigate("Drawer");
        }
        else {
            Toast.show({
                text: "Enter Valid Username & password!",
                duration: 2000,
                position: "bottom",
                textStyle: { textAlign: "center" },
            });
        }
    }
    loginSuccess = (data) => {
        this.localStorageservice.create();
        this.localStorageservice.setValue('accessToken', data.access_token);
        this.localStorageservice.setValue('refreshToken', data.refresh_token);

        this.setState({ 'isLoading': false });
        let uid = this.utilityService.getUniqueID();
        console.log('uid', uid);
        this.messaging.getToken().then(token => {
            console.log('token', token);
            this.props.navigation.navigate("Drawer");
        })
        // console.log('success');
    }
    loginFailure = (error) => {
        this.setState({ 'isLoading': false });
        console.log('error');
        Toast.show({
            text: "Invalid login credentials!",
            duration: 2000,
            position: "bottom",
            textStyle: { textAlign: "center" },
        });
    }
    render() {
        const form = (
            <Form>
                <Field name="email" component={this.renderInput} ref={(input) => this.getEmail = input} validate={[email, required]} />
                <Field name="password" component={this.renderInput} ref={(input) => this.getPassword = input} validate={[minLength5, maxLength15, required]} />
            </Form>

            // React.createElement(Form, null,
            // React.createElement(Field, { name: "email", component: this.renderInput, validate: [email, required] }),
            // React.createElement(Field, { name: "password", component: this.renderInput, validate: [alphaNumeric, minLength8, maxLength15, required] }))

        );

        return (
            <Login loginForm={form} onLogin={() => this.login()} isLoading={this.state.isLoading} />
        )
        // React.createElement(Login, { loginForm: form, onLogin: () => this.login() });
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.loginReducer.isLoading,
        result: state.loginReducer.result,
        error: state.loginReducer.error
    }
}
const LoginContainer = reduxForm({
    form: "login",
})(LoginForm);
export default connect(mapStateToProps)(LoginContainer);
//# sourceMappingURL=index.js.map
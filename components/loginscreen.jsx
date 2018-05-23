import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './login.jsx';
import Register from './register.jsx';

class Loginscreen extends React.Component {

    state = { 
        username: '',
        password: '',
        loginscreen: [],
        loginmessage: '',
        buttonLabel: 'Register',
        isLogin: true
    }
    
    

    handleClickScreen = (event) => {
        // console.log("event",event);
        let loginmessage;
        if (this.state.isLogin) {
            let loginscreen=[];
            loginscreen.push(<Register parentContext={this}/>);
            loginmessage = "Already registered.Go to Login";
            this.setState({
                loginscreen: loginscreen,
                loginmessage: loginmessage,
                buttonLabel: "Login",
                isLogin: false
            })
        } else {
            var loginscreen=[];
            loginscreen.push(<Login parentContext={this}/>);
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true
            })
        }
    }
    
    render() {
        const style = {
            margin: 15,
        };

        return (
        <div className="loginscreen">{this.state.loginscreen}
            <div>{this.state.loginmessage}
            <MuiThemeProvider>
                <div>
                    <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={this.handleClickScreen}/>
                </div>
            </MuiThemeProvider>
            </div>
        </div>
        )
    }

    componentWillMount() {
        let loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        const loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
}

export default Loginscreen;
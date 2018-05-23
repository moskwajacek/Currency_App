import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

import Login from './login.jsx';

class Register extends React.Component {

    state = {
        first_name:'',
        last_name:'',
        email:'',
        password:''
    }

    handleClickRegister = (event) =>{
        const apiBaseUrl = "http://localhost:3000";
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
        //To be done:check for empty values before hitting submit
        // let self = this;
        let payload = {
            "first_name" : this.state.first_name,
            "last_name" :this.state.last_name,
            "email" :this.state.email,
            "password" :this.state.password
        }

        


        axios.post(apiBaseUrl + '/register', payload)
        .then((response) => {
            console.log(response);
            if(response.data.code == 200){
                //  console.log("registration successfull");
                let loginscreen=[];
                loginscreen.push(<Login parentContext={this}/>);
                let loginmessage = "Not Registered yet.Go to registration";
                self.props.parentContext.setState({loginscreen:loginscreen,
                    loginmessage:loginmessage,
                    buttonLabel:"Register",
                    isLogin:true
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {

        const style = {
            margin: 15,
        };
        return (
        <div>
            <MuiThemeProvider>
                <div>
                    <AppBar title="Register"/>
                    <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange = {(event,newValue) => this.setState({first_name:newValue})}
                    />
                    <br/>
                    <TextField hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange = {(event,newValue) => this.setState({last_name:newValue})}
                    />
                    <br/>
                    <TextField
                    hintText="Enter your Email"
                    type="email"
                    floatingLabelText="Email"
                    onChange = {(event,newValue) => this.setState({email:newValue})}
                    />
                    <br/>
                    <TextField 
                    type = "password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClickRegister}/>
                </div>
            </MuiThemeProvider>
        </div>);
        }
    }

export default Register;
import React, { Component } from 'react'
import Form from './Form'
import FormErrors from './FormErrors'

class App extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value)
        })
    }
    validateField(fieldName, value) {

        let formErrors = this.state.formErrors
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid

        switch (fieldName) {
            case 'email': {
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                formErrors.email = emailValid ? '' : ' is invalid!'
                break
            }
            case 'password': {
                passwordValid = value.length >= 6
                formErrors.password = passwordValid ? '' : ' is too short!'
                break
            }
            default:
                break
        }

        this.setState({
            formErrors,
            emailValid,
            passwordValid,
            formValid: emailValid && passwordValid
        })
    }
    render() {
        return (
            <div className="App">
                <h2>React Form Validation Example</h2>
                <Form onChange={ (e) => this.handleUserInput(e)} email={this.state.email} password={this.state.password} formValid={this.state.formValid}/>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>
            </div>
        )
    }
}

export default App
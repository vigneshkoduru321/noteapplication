import './index.css'

import Cookies from 'js-cookie'

import {Component, Redirect} from 'react'

import {Link} from 'react-router-dom'

class Register extends Component {
  state = {name: '', email: '', password: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, email, password} = this.state
    const inputValues = {Name: name, Email: email, Password: password}
    Cookies.set(`value${email}`, JSON.stringify(inputValues), {expires: 356})
    const registerValue = true
    Cookies.set('isRegister', {registerValue}, {expires: 365})
    this.setState({name: '', email: '', password: ''})
    const va = Cookies.get({email})
    console.log(va)
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {name, email, password} = this.state

    return (
      <div className="register-background">
        <form onSubmit={this.onSubmitForm} className="register-card">
          <h1 className="register-heading">CREATE AN ACCOUNT</h1>
          <div className="container-input">
            <input
              onChange={this.onChangeName}
              value={name}
              className="input"
              type="text"
            />
            <p className="name-re">Your Name</p>
          </div>
          <div className="container-input">
            <input
              onChange={this.onChangeEmail}
              value={email}
              className="input"
              type="email"
            />
            <p className="name-re">Your Email</p>
          </div>
          <div className="container-input">
            <input
              onChange={this.onChangePassword}
              value={password}
              className="input"
              type="password"
            />
            <p className="name-re">Your Password</p>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
          <p className="para-login-here">
            Have already an account?
            <Link to="/login" className="login-here-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

export default Register

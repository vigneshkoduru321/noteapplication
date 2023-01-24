import './index.css'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import {Component} from 'react'

class Login extends Component {
  state = {email: '', password: '', showError: false}

  onSubmitLogin = event => {
    event.preventDefault()
    this.setState({email: '', password: ''})
    const {email, password} = this.state
    const value = Cookies.get(`value${email}`)
    if (value !== undefined) {
      const parseValue = JSON.parse(value)
      const {Email, Password} = parseValue
      if (parseValue.Email === email && parseValue.Password === password) {
        this.setState({showError: false})
        const {history} = this.props
        history.replace('/')
      }
    } else {
      this.setState({showError: true})
    }
  }

  onChangeEmailValue = e => {
    this.setState({email: e.target.value})
  }

  onChangePasswordValue = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {email, password, showError} = this.state

    return (
      <div className="login-background">
        <form onSubmit={this.onSubmitLogin} className="login-card">
          <h1 className="login-heading">LOGIN</h1>
          <div className="container-input">
            <input
              onChange={this.onChangeEmailValue}
              value={email}
              id="email"
              className="input"
              type="email"
            />
            <label htmlFor="email" className="name-re">
              Your Email
            </label>
          </div>
          <div className="container-input">
            <input
              onChange={this.onChangePasswordValue}
              value={password}
              id="password"
              className="input"
              type="password"
            />
            <label htmlFor="password" className="name-re">
              Your Password
            </label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="error-container">
            {showError ? (
              <p className="error-msg">
                The email address or password that you've entered doesn't match
                any account.<span>Register for an account.</span>
              </p>
            ) : null}
          </div>
          <p className="login-register-here">
            Don't have an account?
            <Link to="/register" className="login-here-link">
              Register here
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

export default Login

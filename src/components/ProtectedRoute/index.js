import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const registerv = Cookies.get('isRegister')
  if (registerv === undefined) {
    return <Redirect to="/register" />
  }
  return <Route {...props} />
}

export default ProtectedRoute

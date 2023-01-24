import './App.css'

import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App

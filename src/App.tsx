import React from 'react'
import Login from './layouts/login/index'
import Root from './layouts/root/RootComponent'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to={'/root'} />} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/root'} component={Root} />
      </Switch>
    </HashRouter>
  )
}

export default App

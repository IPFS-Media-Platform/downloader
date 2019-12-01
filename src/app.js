// Components
import React from "react"
import VaultTable from './components/vault-table'
import Vault from './components/vault'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={VaultTable} />
      <Route path="/vault">
        <Vault />
      </Route>
    </Switch>
  </Router>
)

export default App

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
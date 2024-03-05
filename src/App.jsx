

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./pages/Login"
import Home from "./pages/Home"
import { AuthRoute } from './middleware/AuthRoute';
import { useAuth } from './context/AuthContext';


function App() {

  const { isAuthenticated } = useAuth();
  console.log('Updating global state:', isAuthenticated);
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/todo-react/" exact component={Login} />
          <Route path="/todo-react/login" exact component={Login} />
          <AuthRoute path="/todo-react/home" exact component={Home} />
        </Switch>
      </Router>
    
    </>
  )
}

export default App

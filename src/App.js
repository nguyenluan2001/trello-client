import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SignIn from './features/auth/signIn/SignIn';
import Homepage from './features/homepage/Homepage';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin" exact component={SignIn}></Route>
          <PrivateRoute path="/" component={Homepage}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

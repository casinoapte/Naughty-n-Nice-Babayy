import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroupForms from "./components/groupForms/GroupForms"
import HomePage from "./pages/HomePage/HomePage";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";
import Sidebar from './components/Sidebar/Sidebar';
import SignUp from "./pages/SignInPage/SignIn"
import NoMatch from "./pages/ErrorPage/NoMatch";


function App() {
  return (
    <Router>
      <>
        <HomePage />
        <Switch>
          <Route exact path="/" component={GroupForms}></Route>
          <Route exact path="/:_id/:name" component={MainGroupPage}></Route>
          <Route path="/signin" component={SignUp}></Route>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
        <Sidebar />
      </>
    </Router>
  )
}

export default App;


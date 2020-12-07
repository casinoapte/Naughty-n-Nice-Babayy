import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GroupForms from "./components/groupForms/GroupForms"
import MainPage from "./components/mainPage/MainPage";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";


function App() {
  return (
  <Router>
    <>
    <MainPage/>
    <Route exact path="/" component={GroupForms}></Route>
    <Route exact path="/:_id/:name" component={MainGroupPage}></Route>
    {/* <Route exact path="" component={NotFound}></Route> */}
    </>
  </Router>
  )
}

export default App;


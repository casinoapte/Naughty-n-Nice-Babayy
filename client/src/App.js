import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup";
import FindGroup from "./components/findGroup/FindGroup"
import MainPage from "./components/mainPage/MainPage";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";


function App() {
  return (
    <Router>
    <>
    <MainPage></MainPage>
    <Route exact path="/" component={CreateGroup}></Route>
    <Route exact path="/" component={FindGroup}></Route>
    <Route exact path="/:_id/:name" component={MainGroupPage}></Route>
    </>
  </Router>
  )
}

export default App;


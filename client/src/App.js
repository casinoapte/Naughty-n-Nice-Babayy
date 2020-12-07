import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateGroup from "./components/createGroup/CreateGroup";
import FindGroup from "./components/findGroup/FindGroup"
import HomePage from "./pages/HomePage/HomePage";
import MainGroupPage from "./pages/main-group-page/MainGroupPage";
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
    <>
    <HomePage></HomePage>
    <Route exact path="/" component={CreateGroup}></Route>
    <Route exact path="/" component={FindGroup}></Route>
    <Route exact path="/:_id/:name" component={MainGroupPage}></Route>
    </>
    <Sidebar />
  </Router>
  )
}

export default App;


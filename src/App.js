import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Intro from "./components/Intro";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro></Intro>}></Route>
                <Route path="signup/" element={<Signup></Signup>}></Route>
                <Route path="login/" element={<Login></Login>}></Route>
                <Route path="home/" element={<Home></Home>}>
                    <Route path="" element={<p>Home Page</p>}></Route>
                    <Route
                        path="ownedTeams"
                        element={<p>Owned Teams</p>}
                    ></Route>
                    <Route
                        path="workingTeams"
                        element={<p>Working Teams</p>}
                    ></Route>
                </Route>
                <Route path="*" element={<Intro></Intro>}></Route>
            </Routes>
        </Router>
    );
}

export default App;

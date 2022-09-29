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
                <Route path="user/:token/" element={<Home></Home>}></Route>
                <Route path="*" element={<Intro></Intro>}></Route>
            </Routes>
        </Router>
    );
}

export default App;

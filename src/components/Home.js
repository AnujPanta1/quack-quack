import { useState } from "react";
import { Routes, useLocation, Link, Route, Outlet } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.state);

    const data = useState(location.state);

    return (
        <div className="home">
            <div className="header">
                <p className="title">Quack Quack</p>
                <p className="greeting">Welcome back</p>
                <p className="greeting">Your email is</p>
            </div>
            <div className="side">
                <ul>
                    <Link to="">
                        <li>Home</li>
                    </Link>
                    <Link to="ownedTeams">
                        <li>Owned Teams</li>
                    </Link>
                    <Link to="workingTeams">
                        <li>Current Teams</li>
                    </Link>
                </ul>
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;

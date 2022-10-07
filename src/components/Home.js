import { Link, useParams } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const baseUrl = "https://quack-quack-api.herokuapp.com";

    const [user, setUser] = useState({
        name: "",
    });
    const params = useParams();
    console.log(params.token);
    useEffect(
        () => {
            axios
                .get(`${baseUrl}/api/auth/userData/`, {
                    headers: {
                        "auth-token": params.token,
                    },
                })
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        // eslint-disable-next-line
        []
    );

    return (
        <div className="home">
            <div className="header">
                <Link to="/">
                    <p className="title">Quack Quack</p>
                </Link>
            </div>
            <div className="main">
                <h1>Dashboard</h1>
                <p>welcome back, {user.name.toLowerCase()}</p>
                <OwnedTeams />
            </div>
        </div>
    );
};

export default Home;

const OwnedTeams = () => {
    return (
        <div className="owned">
            <p>owend teams</p>
        </div>
    );
};

import { Link, parsePath, useParams } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/auth/userData/", {
                header: {
                    "auth-token": params.token,
                },
            })
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="home">
            <div className="header">
                <Link to="/">
                    <p className="title">Quack Quack</p>
                </Link>
            </div>
            <div className="main">
                <h1>Hello {user.name}</h1>
            </div>
        </div>
    );
};

export default Home;

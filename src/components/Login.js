import React from "react";
import { motion } from "framer-motion";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [authFail, setAuthFail] = useState(false);

    const navigate = useNavigate();

    const loginUser = () => {
        setEmail("");
        setPassword("");

        let payload = {
            email: email,
            password: password,
        };

        axios
            .post("http://localhost:8000/api/auth/login", payload)
            .then((res) => {
                navigate("/home", {
                    state: {
                        user: res.data,
                        token: res.headers["auth-token"],
                    },
                });
            })
            .catch((err) => {
                setAuthFail(true);
            });
    };

    const renderAuthState = () => {
        if (!authFail) {
            return <></>;
        }

        let message = "Lol failed.";

        const animate = {
            hidden: {
                opacity: 0,
                scale: 0.5,
            },
            visual: {
                opacity: 1,
                scale: 1,
            },
        };

        return (
            <motion.p
                className="auth-state"
                variants={animate}
                initial={"hidden"}
                animate={"visual"}
                transition={{ duration: 1 }}
            >
                {message}
            </motion.p>
        );
    };

    return (
        <div className="login-wrapper">
            <div className="login">
                <h4 className="title">Splatter Bug</h4>
                <p className="message">Welcome back!</p>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                ></input>
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                ></input>
                <CustomButton text={"Submit"} action={loginUser}></CustomButton>
                {renderAuthState()}
                <Link to="/">
                    <p className="back">go back</p>
                </Link>
            </div>
        </div>
    );
};

export default Login;

const CustomButton = ({ text, action }) => {
    return (
        <motion.div
            className="c-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
            onClick={() => action()}
        >
            <h4>{text}</h4>
        </motion.div>
    );
};

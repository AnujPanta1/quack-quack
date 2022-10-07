import "./Signup.css";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const baseUrl = "https://quack-quack-api.herokuapp.com";

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [authFail, setAuthFail] = useState(false);

    const navigate = useNavigate();

    const registerUser = () => {
        let payload = {
            email: email,
            name: name,
            password: password,
        };

        axios
            .post(`${baseUrl}/api/auth/login`, payload)
            .then((res) => {
                loginUser();
            })
            .catch((err) => {
                setAuthFail(true);
            });
    };

    const loginUser = () => {
        setName("");
        setEmail("");
        setPassword("");

        let payload = {
            email: email,
            password: password,
        };

        axios
            .post("http://localhost:8000/api/auth/login", payload)
            .then((res) => {
                navigate(`/user/${res.headers["auth-token"]}`);
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
        <div className="signup-wrapper">
            <motion.div
                className="signup"
                animate={{ y: 0, scale: 1, opacity: 1 }}
                initial={{}}
            >
                <h4 className="title">Quack Quack</h4>
                <p className="message">Welcome back!</p>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                ></input>
                <input
                    placeholder="Username"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
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
                <CustomButton
                    text={"Submit"}
                    action={registerUser}
                ></CustomButton>
                {renderAuthState()}
                <Link to="/">
                    <p className="back">Go back</p>
                </Link>
            </motion.div>
        </div>
    );
};

export default Signup;

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

import "./Intro.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const intro_fadein = {
    hidden: {
        opacity: 0,
    },
    visual: {
        opacity: 1,
    },
};

const Intro = () => {
    return (
        <div className="intro">
            <motion.h1
                animate={{ opacity: 1, scale: 1, y: 0 }}
                initial={{ opacity: 0, scale: 0.3, y: -150 }}
                transition={{ duration: 1.2 }}
                className="title"
            >
                welcome to,
                <br />
                <span className="cool">Quack Quack</span>
            </motion.h1>
            <motion.p
                className="description"
                variants={intro_fadein}
                initial={"hidden"}
                animate={"visual"}
                transition={{ duration: 0.85, delay: 1 }}
            >
                We aim to make bug management simple. It’s simple to sign up and
                start working now ! Starting is one click away.
            </motion.p>
            <motion.div
                className="button-holder"
                variants={intro_fadein}
                initial={"hidden"}
                animate={"visual"}
                transition={{ duration: 0.85, delay: 1 }}
            >
                <Link to="login">
                    <CustomButton text="Login"></CustomButton>
                </Link>
                <Link to="signup">
                    <CustomButton text="Sign Up"></CustomButton>
                </Link>
            </motion.div>
        </div>
    );
};

export default Intro;

const CustomButton = ({ text }) => {
    return (
        <motion.div
            className="c-button"
            whileHover={{
                scale: 1.3,
            }}
            whileTap={{
                scale: 0.9,
            }}
        >
            <h4>{text}</h4>
        </motion.div>
    );
};

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <h2>WELCOME TO THE QUIZ</h2>
            <h3>Practice and Learn</h3>

            <Link to="/config">Start Quiz</Link>
        </div>
    );
};

export default Home;
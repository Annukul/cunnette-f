import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ history }) => {
    const [userName, setUsername] = useState("");
    const [fullName, setName] = useState("");
    const [emailId, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        console.log(userName, fullName, emailId, password);

        try {
            const { data } = await axios.post("/auth/signup", { userName, fullName, emailId, password }, config);

            localStorage.setItem("authToken", data.token);

            history.push("/profile");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup

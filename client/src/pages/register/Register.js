import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setConfirmPassword(confirmPasswordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        username,
        password,
        confirmPassword,
      });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="showcase">
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix logo" />
        <Link to="/login" className="btn btn-rounded">
          Sign In
        </Link>
      </div>
      <div className="showcase-content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p>Watch anywhere. Cancel Anytime</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email id" ref={emailRef} />
            <button className="btn btn-register" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <input
              type="password"
              placeholder="Confirm password"
              ref={confirmPasswordRef}
            />
            <button className="btn btn-register" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

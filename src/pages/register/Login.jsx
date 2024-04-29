import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    setPasswordError("");
    const userData = {
      email,
      password,
    };
    axios
      .post("http://localhost:5000/auth/login", userData)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data));

        // Set a cookie
        Cookies.set("accessToken", res.data["accessToken"]);

        navigate("/landingPage");
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            // Email not found error
            setEmailError(error);
            console.log(error.response.data.message);
          } else if (error.response.status === 400) {
            // Incorrect password error
            setPasswordError(error);
            console.log(error.response.data.message);
          }
        }
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ paddingBottom: "20px" }}>
        <Form.Group controlId="loginFormEmail" style={{}}>
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            // placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="errorMessage">user not found</span>}
        </Form.Group>

        <Form.Group controlId="loginFormPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            // placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="errorMessage">incorrect password</span>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember me"
            style={{
              display: "flex",
              fontWeight: "400",
              color: "#a6aeb9 ",
              alignItems: "center",
              fontSize: "12px",
              padding: "8px 0px 10px 20px",
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ fontSize: "11px", color: "#ffff", fontWeight: "600" }}
        >
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default Login;

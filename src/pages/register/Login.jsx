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

    // Update the URL to point to your JSON Server endpoint
    axios
      .post("http://localhost:3001/users", userData)
      .then((res) => {
        // Handle successful login
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            // Email not found error
            setEmailError("User not found");
          } else if (error.response.status === 401) {
            // Incorrect password error
            setPasswordError("Incorrect password");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="errorMessage">{emailError}</span>}
        </Form.Group>

        <Form.Group controlId="loginFormPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="errorMessage">{passwordError}</span>
          )}
        </Form.Group>
        <Form.Group
          controlId="registerFormCheckbox"
          className="mt-2 col-12 d-flex"
        >
          <Form.Check
            type="checkbox"
            // checked={acceptTC}
            // onChange={() => setAcceptTC(!acceptTC)}
          />
          <p
            style={{
              paddingLeft: "3px",
              color: "black",
              textDecoration: "none",
              marginBottom: "2px",
              cursor: "pointer",
              fontWeight: "400",
              fontSize: "11px",
            }}
          >
            Remember me
          </p>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default Login;

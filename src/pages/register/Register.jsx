import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { setActiveTab } from "../../../redux/slices/SetActiveSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTC, setAcceptTC] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      acceptTC,
    };

    // Update the URL to point to your JSON Server endpoint for registration
    axios
      .post("http://localhost:3001/users", userData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        alert("You have successfully registered.");
        dispatch(setActiveTab("login")); // Dispatch action to switch to login tab/page
        // navigate("/"); // Redirect to login page
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="registerFormEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="registerFormPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="registerFormPassword">
          <Form.Label>CONFIRM-PASSWORD</Form.Label>
          <Form.Control
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          controlId="registerFormCheckbox"
          className="mt-2 col-12 d-flex"
        >
          <Form.Check
            type="checkbox"
            checked={acceptTC}
            onChange={() => setAcceptTC(!acceptTC)}
          />
          <p
            style={{
              paddingLeft: "3px",
              color: "black",
              textDecoration: "none",
              marginBottom: "2px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Accept{" "}
            <span
              style={{
                paddingLeft: "3px",
                color: "White",
                textDecoration: "none",
                marginBottom: "2px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              T&C
            </span>
          </p>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={{
            fontSize: "11px",
            color: "#147dff",
            fontWeight: "600",
            borderColor: "transparent",
          }}
        >
          REGISTER
        </Button>
      </Form>
    </div>
  );
};

export default Register;

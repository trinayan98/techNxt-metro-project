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
  // const [username, setUseName] = useState("");
  const [acceptTC, setAcceptTC] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      acceptTC,
      // username,
    };
    axios
      .post("http://localhost:5000/auth/register", userData)
      .then((response) => {
        console.log("registration successful:", response.data);
        // navigate("./login");

        alert("you have successfully registered");
        dispatch(setActiveTab("login"));
      })
      .catch((error) => {
        console.error("registration failed", error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group controlId="registerFormUsername">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control
            // type=""
            // placeholder="Enter a username"
            value={username}
            onChange={(e) => setUseName(e.target.value)}
          />
        </Form.Group> */}
        <Form.Group controlId="registerFormEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            // placeholder="Enter a new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="registerFormPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            // placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="registerFormPassword">
          <Form.Label>CONFIRM PASSWORD</Form.Label>
          <Form.Control
            type="password"
            // placeholder="Confirm password"
            // value={password}

            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          controlId="registerFormCheckbox"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Form.Check
            type="checkbox"
            label="ACCEPT"
            checked={acceptTC}
            onChange={() => setAcceptTC(!acceptTC)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          />
          <Link to={"/register/terms&condition"}>
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
              T&C
            </p>
          </Link>
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
          style={{
            fontSize: "11px",
            color: " #147dff",
            fontWeight: "600",
            borderColor: "transparent",
          }}
        >
          RESGISTER
        </Button>
      </Form>
    </div>
  );
};

export default Register;

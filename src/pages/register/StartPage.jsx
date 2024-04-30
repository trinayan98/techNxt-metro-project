import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";

import "./StartPage.scss";
import CancelIcon from "@mui/icons-material/Cancel";

import { Row, Col, Container } from "react-bootstrap";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
const StartPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <Col style={{ padding: "30px", minHeight: "70vh" }} id="start-page-col">
      <Container
        className="form_wrap_container d-block align-items-center flex-row"
        style={{
          position: "relative",

          overflow: "hidden",
          width: "392px",

          borderRadius: "3px",
          padding: "0px",
          height: "412px",
        }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",

            width: "784px",
            // alignItems: "flex-start",
            margin: "0px",
            height: "412px",
          }}
        >
          <Col
            className="login_wrap_col d-flex justify-content-end"
            style={{
              backgroundColor: showRegister ? "#333333" : "#ffff",
              transition: "all .4s ease-in-out",
              maxWidth: "392px",
              borderRadius: "3px",

              padding: "0px",
              height: "412px",
              backgroundColor: "#F8F9FA",
            }}
          >
            <Col className="header_and_login_form_wraper_col d-flex flex-column col-11 p-4">
              <h3 style={{ fontSize: "18px", marginTop: "50px" }}>
                ACCOUNT LOGIN
              </h3>
              <Login />
            </Col>
            <Col
              className="go_to_register_col d-flex align-items-center"
              onClick={handleToggleRegister}
              style={{ borderBottomRightRadius: "3px" }}
            >
              <ArrowBackIosNewRoundedIcon style={{ color: "white" }} />
            </Col>
          </Col>

          <Col
            id="showraw"
            className={`transition_col ${showRegister ? "active" : ""}`}
            style={{
              maxWidth: "370px",
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: showRegister ? "#4285F4" : "#4285F4",
              transition: "transform 0.3s ease-in-out",
              transform: showRegister
                ? "translateX(-370px)"
                : "translateX(0px)",
              borderRadius: "0px 3px 3px 0px",
              height: "412px",
            }}
          >
            <Col
              className="header_and_register_form_wraper_col"
              style={{ width: "320px" }}
            >
              <Col className="header_col  d-flex flex-row align-items-center justify-content-between">
                <h3 style={{ fontSize: "18px", margin: "0px" }}>
                  {" "}
                  REGISTER ACCOUNT
                </h3>
                <CancelIcon onClick={handleToggleRegister} color="#ffffff" />
              </Col>
              <Register />
            </Col>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default StartPage;

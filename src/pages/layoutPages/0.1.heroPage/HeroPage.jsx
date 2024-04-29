import React from "react";
import { Button, Col } from "react-bootstrap";

const HeroPage = () => {
  return (
    <Col
      className="col-12 d-flex pt-3 pb-3 "
      style={{ marginTop: "60px", marginBottom: "60px" }}
    >
      <Col className="col-lg-5 d-lg-flex d-none justify-content-center ">
        <img
          src="/src/assets/img/trainstation.jpg"
          style={{
            height: "400px",
            mixBlendMode: "multiply",
            // marginRight: "80px",
          }}
        />
      </Col>
      <Col className="col-lg-7 d-flex col-12 flex-column align-items-center mt-5 ">
        <Col className="col-10 mb-4">
          <h2 style={{ fontWeight: 700, fontSize: "38px" }}>
            Welcome to <span style={{ color: "#FED869" }}>StationGuard</span> –
            Keeping Our Stations Safe Together!
          </h2>
        </Col>
        <Col className="col-10" style={{ color: "#797b7b", fontSize: "18px" }}>
          At StationGuard, we believe in the power of community to create safer
          and more secure environments for everyone. Our platform empowers you
          to play an active role in maintaining the safety of train stations by
          reporting incidents and suspicious activities through video uploads.
        </Col>
        <Col
          className="col-10 mt-3"
          style={{ color: "#235274", fontSize: "18px" }}
        >
          Ready to make a positive impact? Sign up or log in to begin
          contributing to safer stations!
        </Col>
        <Col className="col-10 mt-2" style={{ fontSize: "16px" }}>
          <Button style={{ padding: "8px 20px 8px 20px", fontWeight: 500 }}>
            Sign Up
          </Button>
        </Col>
      </Col>
    </Col>
  );
};

export default HeroPage;

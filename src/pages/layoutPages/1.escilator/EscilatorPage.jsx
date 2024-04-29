import React from "react";
import { Col, Button } from "react-bootstrap";
import FallingSVG from "../../../assets/jsxSVG/FallingSVG";
const EscilatorPage = () => {
  return (
    <Col
      className="col-12 d-flex mt-4 mb-4 pt-3 pb-3 ps-3"
      style={{
        backgroundColor: "#fcfcfc",
        borderRadius: "5px",
        boxShadow: "0px 0px 16px -7px #c1c1c1",
      }}
    >
      <Col className="col-7 d-flex  flex-column align-items-center mt-5 ">
        <Col className="col-11 mb-4">
          <h2 style={{ fontWeight: 700 }}>
            <span style={{ color: "#007DFE" }}> Falling </span>
            onto the tracks
          </h2>
        </Col>
        <Col className="col-11" style={{ color: "#797b7b", fontSize: "18px" }}>
          If you witness someone falling onto the train tracks, every second
          counts. Record a video to alert authorities and potentially save a
          life.Ready to be a lifesaver? Click below to upload your video and
          assist in emergency response.
        </Col>
        <Col className="col-11 mt-4" style={{ fontSize: "16px" }}>
          <Button style={{ padding: "8px 20px 8px 20px", fontWeight: 500 }}>
            Upload
          </Button>
        </Col>
      </Col>
      <Col className="col-5 d-flex justify-content-center">
        <FallingSVG style={{ height: "400px" }} />
      </Col>
    </Col>
  );
};

export default EscilatorPage;

import React from "react";
import { Col, Button } from "react-bootstrap";
import NoEntrySVG from "../../../assets/jsxSVG/NOEntrySVG";
const EnterNoEntry = () => {
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
            Entering <span style={{ color: "#FF725E" }}>No-entry </span> places
          </h2>
        </Col>
        <Col className="col-11" style={{ color: "#797b7b", fontSize: "18px" }}>
          Restricted areas exist for everyone's safety. If you spot someone
          trespassing, record a video to help us enforce security measures.Be
          our eyes on the ground. Click below to upload your video and maintain
          station security.
        </Col>
        <Col className="col-11 mt-4" style={{ fontSize: "16px" }}>
          <Button
            style={{
              padding: "8px 20px 8px 20px",
              fontWeight: 500,
              backgroundColor: "#FF725E",
              borderColor: "transparent",
              color: "",
            }}
          >
            Upload
          </Button>
        </Col>
      </Col>
      <Col className="col-5 d-flex justify-content-center">
        <NoEntrySVG style={{ height: "400px" }} />
      </Col>
    </Col>
  );
};

export default EnterNoEntry;

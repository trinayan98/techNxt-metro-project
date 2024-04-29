import React from "react";
import { Col } from "react-bootstrap";
import ObserveSVG from "../../../assets/jsxSVG/ObserveSVG";
import RecordSVG from "../../../assets/jsxSVG/RecordSVG";
import ReportSVG from "../../../assets/jsxSVG/ReportSVG";

const HowItWorks = () => {
  const colStyle = {
    backgroundColor: "#fcfcfc",
    borderRadius: "5px",
    boxShadow: "0px 0px 16px -7px #c1c1c1",

    textAlign: "center",
    color: "#878787",
    fontSize: "14px",
  };

  return (
    <Col className="col-12 mt-3">
      <Col className="col-12 d-flex align-items-center justify-content-center mb-4">
        <h1 style={{ fontWeight: 700 }}>How it works</h1>
      </Col>
      <Col className="col-12 d-flex flex-wrap align-items-center justify-content-around flex-row mt-3 mb-5">
        <Col className="col-3 p-4" style={colStyle}>
          <Col className="col-12 d-flex justify-content-center p-4">
            <ObserveSVG style={{ height: "100px", width: "100px" }} />
          </Col>
          <Col className="col-12">
            Keep a vigilant watch on your surroundings during your commute or
            while at the station. Stay alert and attentive to any unusual
            activities that may occur.
          </Col>
        </Col>
        <Col className="col-3 p-4" style={colStyle}>
          <Col className="col-12 d-flex justify-content-center p-4">
            <RecordSVG style={{ height: "100px", width: "100px" }} />
          </Col>
          <Col className="col-12">
            If you witness any concerning behavior such as fights, trespassing,
            littering, unattended bags, or individuals falling onto the tracks,
            capture a video using your smartphone.
          </Col>
        </Col>
        <Col className="col-3 p-4" style={colStyle}>
          <Col className="col-12 d-flex justify-content-center p-4">
            <ReportSVG style={{ height: "100px", width: "100px" }} />
          </Col>
          <Col className="col-12">
            Upload your video footage directly to our platform. Your
            contribution will assist authorities in taking appropriate action to
            address the situation promptly.
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default HowItWorks;

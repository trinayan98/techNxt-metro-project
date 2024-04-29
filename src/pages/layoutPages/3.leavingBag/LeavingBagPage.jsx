import React from "react";
import BagSVG from "../../../assets/jsxSVG/BagSVG";
import { Col, Button } from "react-bootstrap";

const LeavingBagPage = () => {
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
            <span style={{ color: "#B79279" }}> Leaving bags </span> unattended
          </h2>
        </Col>
        <Col className="col-11" style={{ color: "#797b7b", fontSize: "18px" }}>
          Unattended bags can pose serious security threats. Stay vigilant and
          report any unattended belongings by recording a video.Keep our
          stations safe. Upload your video now and help us prevent potential
          risks.
        </Col>
        <Col className="col-11 mt-4" style={{ fontSize: "16px" }}>
          <Button
            style={{
              padding: "8px 20px 8px 20px",
              fontWeight: 500,
              backgroundColor: "#B79279",
              borderColor: "transparent",
              color: "",
            }}
          >
            Upload
          </Button>
        </Col>
      </Col>
      <Col className="col-5 d-flex justify-content-center">
        <BagSVG style={{ height: "400px" }} />
      </Col>
    </Col>
  );
};

export default LeavingBagPage;

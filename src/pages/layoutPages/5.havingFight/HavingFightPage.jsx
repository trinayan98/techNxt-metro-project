import React from "react";
import { Col, Button } from "react-bootstrap";
import FightSVG from "../../../assets/jsxSVG/FightSVG";
const HavingFightPage = () => {
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
            Witnessing a <span style={{ color: "#00D6C0" }}>Fight</span>
          </h2>
        </Col>
        <Col className="col-11" style={{ color: "#797b7b", fontSize: "18px" }}>
          If you observe a physical altercation or fight at the train station,
          please record a video to assist authorities in maintaining safety.Be a
          part of the solution. Upload your video now to ensure everyone's
          safety.
        </Col>
        <Col className="col-11 mt-4" style={{ fontSize: "16px" }}>
          <Button
            style={{
              padding: "8px 20px 8px 20px",
              fontWeight: 500,
              backgroundColor: "#00D6C0",
              borderColor: "transparent",
              color: "",
            }}
          >
            Upload
          </Button>
        </Col>
      </Col>
      <Col className="col-5 d-flex justify-content-center">
        <FightSVG style={{ height: "400px" }} />
      </Col>
    </Col>
  );
};

export default HavingFightPage;

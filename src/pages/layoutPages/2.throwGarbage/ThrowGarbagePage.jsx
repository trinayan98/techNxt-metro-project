import React from "react";
import { Col, Button } from "react-bootstrap";
import ThrowGarbageSVG from "../../../assets/jsxSVG/ThrowGarbageSVG";
import { useDispatch } from "react-redux";
import { setUploadModal } from "../../../../redux/slices/SetUploadModalSlice";
const ThrowGarbagePage = () => {
  const dispatch = useDispatch();
  return (
    <>
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
              <span style={{ color: "#92E3A9" }}> Throwing trash </span> at a
              train station
            </h2>
          </Col>
          <Col
            className="col-11"
            style={{ color: "#797b7b", fontSize: "18px" }}
          >
            Littering not only makes our stations unsightly but also poses risks
            to everyone's safety. Capture evidence of trash throwing and help us
            maintain a clean environment.Join the cleanup crew! Upload your
            video by clicking the button below.
          </Col>
          <Col className="col-11 mt-4" style={{ fontSize: "16px" }}>
            <Button
              style={{
                padding: "8px 20px 8px 20px",
                fontWeight: 500,
                backgroundColor: "#92E3A9",
                borderColor: "transparent",
                color: "",
              }}
              onClick={() => dispatch(setUploadModal(true))}
            >
              Upload
            </Button>
          </Col>
        </Col>
        <Col className="col-5 d-flex justify-content-center">
          <ThrowGarbageSVG style={{ height: "400px" }} />
        </Col>
      </Col>
    </>
  );
};

export default ThrowGarbagePage;

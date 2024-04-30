// import React, { useState } from "react";
// import "./UploadModal.scss";
// import { Modal, Col, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { setUploadModal } from "../../../redux/slices/SetUploadModalSlice";
// import { Upload, Button } from "antd";
// import ReactPlayer from "react-player";
// import { UploadIcon } from "lucide-react";
// import FileUpload from "./FileUpload";
// const UploadModal = () => {
//   // const [videoSrc, setVideoSrc] = useState("");
//   const [showVideoPlayer, setShowVideoPlayer] = useState(false);

//   const dispatch = useDispatch();

//   // const handleChange = ({ file }) => {
//   //   var reader = new FileReader();
//   //   reader.onload = function (e) {
//   //     // Assuming you have a "videos" array in your db.json file
//   //     const videoData = {
//   //       name: file.name,
//   //       url: e.target.result,
//   //     };

//   //     fetch("http://localhost:3001/videos", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(videoData),
//   //     })
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         console.log("Video uploaded successfully:", data);
//   //         setVideoSrc(data.url);
//   //         setShowVideoPlayer(true);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error uploading video:", error);
//   //       });
//   //   };
//   //   reader.readAsDataURL(file.originFileObj);
//   // };

//   const showModal = useSelector((state) => state.uploadModal.showUploadModal);

//   return (
//     <Modal
//       size="lg"
//       centered
//       show={showModal}
//       onHide={() => {
//         dispatch(setUploadModal(false));
//         setShowVideoPlayer(false);
//       }}
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
//       </Modal.Header>
//       <Modal.Body>

//         <FileUpload
//  />
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default UploadModal;
import React, { useState } from "react";
import "./UploadModal.scss";
import { Modal, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUploadModal } from "../../../redux/slices/SetUploadModalSlice";

import FileUpload from "./FileUpload";
const UploadModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.uploadModal.showUploadModal);
  return (
    <Modal
      size="lg"
      centered
      show={showModal}
      onHide={() => {
        dispatch(setUploadModal(false));
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FileUpload />
      </Modal.Body>
    </Modal>
  );
};

export default UploadModal;

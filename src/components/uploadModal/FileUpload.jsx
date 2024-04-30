import React, { useEffect, useRef, useState } from "react";
import "./UploadModal.scss";
import axios from "axios";
import { Film } from "lucide-react";
import { Col } from "react-bootstrap";

const FileUpload = () => {
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [videoSrc, setVideoSrc] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("description", description);

      const response = await axios.post(
        "http://localhost:3001/videos",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      setUploadStatus("done");
      setShowVideoPlayer(true);
      setVideoSrc(response.data.url);
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {!selectedFile && (
        <button className="file-btn" onClick={onChooseFile}>
          Upload File
        </button>
      )}

      {selectedFile && (
        <>
          <textarea
            className="file-card mb-2"
            type="text"
            as="textarea"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            style={{ fontSize: "13px" }}
          />
          <div className="file-card">
            <span className="material-symbols-outlined icon">
              <Film color="#7460FF" />
            </span>

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span
                    className="material-symbols-outlined close-icon"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    close
                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      class="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === "uploading"
              ? "Upload"
              : "Done"}
          </button>
          <Col className="col-12 mt-2 d-flex justify-content-center align-items-center mb-4">
            <video width="400" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </Col>
        </>
      )}
    </div>
  );
};

export default FileUpload;

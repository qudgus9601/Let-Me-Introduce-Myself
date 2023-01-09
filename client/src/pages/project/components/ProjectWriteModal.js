import "./styles/projectwritemodal.css";
import { useEffect, useRef } from "react";
import mainLogo from "../img/behoney_logo.png";
import axios from "axios";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";

// components
const ModalHeader = () => {
  return (
    <div className="project_write_modal_header">
      <div></div>
      <div className="project_write_modal_header_cancel">
        <AiOutlinePlus size={"1.5rem"} />
      </div>
    </div>
  );
};

const ModalContent = ({ project, submit, setProject }) => {
  useEffect(() => {});
  /**
   * 썸네일을 업로드합니다.
   */
  const uploadThumbnail = (e) => {
    const blob = e.target.files[0];
    if (!!e.target.value) {
      const imageData = new FormData();
      const blobType = blob.type.toString().slice(6);
      const file = new File([blob], encodeURI(`${project.title}.${blobType}`), {
        type: blob.type,
      });
      imageData.append("image", file);
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/image/upload/thumbnail/s3`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: imageData,
        withCredentials: true,
      })
        .then((data) => {
          const thumbnailURL = data.data.fileURL;
          setProject((prev) => {
            return {
              ...prev,
              thumbnail: thumbnailURL,
            };
          });
        })
        .catch((error) => {});
    }
  };

  const thumbnail = useRef();
  return (
    <div className="project_write_modal_content">
      <div className="project_write_modal_content_left">
        <div className="project_write_modal_content_left_content">
          <div
            className="project_write_modal_content_left_label"
            onClick={() => {
              thumbnail.current.click();
            }}
          >
            <img
              className="project_write_modal_content_left_img"
              src={!!project?.thumbnail ? project.thumbnail : mainLogo}
              alt=""
            />
          </div>
          <input
            className="project_write_modal_content_left_file_explorer"
            id="thumbnail"
            type="file"
            onChange={(e) => {
              uploadThumbnail(e);
            }}
            ref={thumbnail}
          />
        </div>
      </div>
      <div className="project_write_modal_content_right">
        <div className="project_write_modal_content_right_title">
          Thumbnail 지정 페이지
        </div>
        <div
          className="project_write_modal_content_right_button"
          onClick={submit}
        >
          {" "}
          글 작성 완료
        </div>
      </div>
    </div>
  );
};

const ModalFooter = () => {
  return <div></div>;
};

export { ModalHeader, ModalContent, ModalFooter };

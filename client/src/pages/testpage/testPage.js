import axios from "axios";
import { useState } from "react";

const TestPage = () => {
  const [src, setSrc] = useState("");
  const s3Test = (e) => {
    const blob = e.target.files[0];
    if (!!e.target.value) {
      const imageData = new FormData();
      const file = new File([blob], encodeURI(`${blob.name}`), {
        type: blob.type,
      });
      imageData.append("image", file);
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/image/upload/s3`,
        headers: {
          "Content-Type": "multipart/form-data",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        data: imageData,
        withCredentials: true,
      })
        .then((data) => {
          setSrc(data?.data?.fileURL);
        })
        .catch((error) => {});
    }
  };
  return (
    <div className="projects">
      <div className="projects_center">
        <div>
          <img src={src} alt=""></img>
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => {
              s3Test(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestPage;

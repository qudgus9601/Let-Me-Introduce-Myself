import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import "@toast-ui/editor/dist/i18n/ko-kr";

const ToastEditor = ({ setProject, defaultContent }) => {
  const editorRef = useRef();

  useEffect(() => {});

  onchange = () => {
    setProject((prev) => {
      return {
        ...prev,
        content: editorRef.current.getInstance().getHTML(),
      };
    });
  };

  return (
    <Editor
      initialValue={defaultContent || ""}
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      height="600px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      language="ko"
      ref={editorRef}
      onChange={() => {
        onchange();
      }}
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          try {
            const imageData = new FormData();
            const file = new File([blob], encodeURI(blob.name), {
              type: blob.type,
            });
            imageData.append("image", file);
            const imageURI = await axios({
              method: "POST",
              headers: {
                "Content-Type": "multipart/form-data",
              },
              url: `${process.env.REACT_APP_SERVER_URL}/api/v1/image/upload`,
              data: imageData,
              withCredentials: true,
            });

            callback(
              `${
                process.env.REACT_APP_SERVER_URL
              }/api/v1/image/${encodeURIComponent(imageURI.data.fileName)}`,
              "image"
            );
          } catch (error) {
            console.log(error);
          }
        },
      }}
    />
  );
};

export default ToastEditor;

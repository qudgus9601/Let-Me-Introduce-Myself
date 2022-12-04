import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const ToastEditor = ({ setProject }) => {
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
      initialValue=""
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      language="ko-KR"
      ref={editorRef}
      onChange={() => {
        onchange();
      }}
    />
  );
};

export default ToastEditor;

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import "./styles/ckeditor5.css";

const editorConfiguration = {
  plugins: [Paragraph, Bold, Italic, Essentials],
  toolbar: ["bold", "italic"],
};

const Viewer = ({ project }) => (
  <div
    className="ck-content"
    dangerouslySetInnerHTML={{ __html: project.content }}
  ></div>
);

const Ckeditor5 = ({ project, setProject }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        data={project.content}
        config={{
          plugins: [Bold],
          toolbar: ["bold"],
        }}
        onChange={(e, editor) => {
          project.content = editor.getData();
          setProject({ ...project });
        }}
      />
      <Viewer project={project} />
      <div>{project.content}</div>
    </div>
  );
};

export default Ckeditor5;

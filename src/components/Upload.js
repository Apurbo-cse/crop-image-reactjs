/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Avatar from "react-avatar-edit";

const Upload = () => {
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {
    console.log("================", preview);
  }, [preview]);

  return (
    <div>
      <Avatar
        width={400}
        height={300}
        onCrop={onCrop}
        onClose={onClose}
        src={file}
      />
      {preview && <img src={preview} />}
    </div>
  );
};

export default Upload;

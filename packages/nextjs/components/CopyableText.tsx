import React from "react";

const CopyableText = ({ text }: { text: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <button onClick={copyToClipboard} style={{ cursor: "pointer", color: "gray", background: "none", border: "none" }}>
      {text}
    </button>
  );
};

export default CopyableText;

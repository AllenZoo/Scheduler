import React, { useEffect, useRef, useState } from "react";

const defaultStyle = {
  display: "block",
  overflow: "hidden",
  resize: "none",
  width: "100%",
  backgroundColor: "white",
};

const AutoHeightTextarea = ({
  style = defaultStyle,
  setTextAreaValue = {},
  initValue = "",
  ...etc
}) => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(initValue); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  return (
    <textarea
      ref={textareaRef}
      style={style}
      {...etc}
      value={currentValue}
      onChange={(e) => {
        setCurrentValue(e.target.value);
        //to do something with value, maybe callback?
        setTextAreaValue(e.target.value);
      }}
    />
  );
};

export default AutoHeightTextarea;

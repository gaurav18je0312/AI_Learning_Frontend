import React, { useState, useEffect } from "react";

const TypingPattern = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const fullText1 = "AI.Text";
  const fullText2 = "Book";

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const intervalId = setInterval(() => {
      if (index1 < fullText1.length) {
        setText1((prevText) => fullText1.slice(0, index1 + 1));
        index1++;
      } else if (index2 < fullText2.length) {
        setText2((prevText) => fullText2.slice(0, index2 + 1));
        index2++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText1, fullText2]);
  return (
    <span>
      {text1}
      <b>{text2}</b>
    </span>
  );
};

export default TypingPattern;

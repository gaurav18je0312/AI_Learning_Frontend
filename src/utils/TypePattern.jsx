import React, { useState, useEffect } from "react";

function TypingPattern() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const fullText = "AI.Text";
  const fullText2 = "Book";

  useEffect(() => {
    let index = 0;
    let index2 = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText1(fullText.slice(0, index + 1));
        index++;
      } else if (index2 < fullText2.length) {
        setText2(fullText2.slice(0, index2 + 1));
        index2++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {text1}
      <b>{text2}</b>
    </span>
  );
}

export default TypingPattern;

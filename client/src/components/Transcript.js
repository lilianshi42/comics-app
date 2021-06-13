import React from "react";

// transform transcript to display the new lines
function Transcript(props) {
  const transcript = props.transcript;
  return <div className="transcript">{transcript}</div>;
}

export default Transcript;

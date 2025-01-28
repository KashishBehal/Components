import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const showValue = () => {
    alert(inputRef.current.value); 
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
};

export default UncontrolledComponent;

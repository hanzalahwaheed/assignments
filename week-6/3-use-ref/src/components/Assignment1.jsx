import { useRef } from "react";
import { useEffect } from "react";

export function Assignment1() {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    focusRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter text here" ref={focusRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

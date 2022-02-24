import { useRef, useEffect } from "react";
function LogButtonClicks() {
  const elementRef = useRef();
  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);
  return <div ref={elementRef}>I'm an element</div>;
}

export default LogButtonClicks;

import { useRef } from "react";
import Input from "./Input";

export const RefInput = () => {
  const componentRef = useRef();

  const clickHandler = () => {
    componentRef.current.focus();
  };

  return (
    <>
      <Input ref={componentRef} />
      <button onClick={clickHandler}>Click</button>
    </>
  );
};

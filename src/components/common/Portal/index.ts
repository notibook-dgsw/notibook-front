import ReactDom from "react-dom";
import { PotalProps } from "./type";

const Portal = ({ children, potalId }: PotalProps) => {
  const el = document.getElementById(potalId) as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default Portal;


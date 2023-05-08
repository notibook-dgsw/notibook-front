import ReactDom from "react-dom";
import { PotalProps } from "./type";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("modal-root") as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default Portal;

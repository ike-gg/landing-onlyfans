import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title: React.FC<Props> = (props) => {
  return (
    <h2 className="text-xl font-medium tracking-wider text-slate-600">
      {props.children}
    </h2>
  );
};

export default Title;

import React, { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  children: ReactNode;
  skeleton?: boolean;
  align?: "center" | "left" | "right";
}

const Paragraph: React.FC<Props> = (props) => {
  const { align, skeleton, children } = props;

  const classes = [
    "text-base",
    "font-normal",
    "leading-relaxed",
    "tracking-wider",
    "text-slate-400",
  ];

  if (align) classes.push(`text-${align}`);
  else classes.push("text-center");

  let element: JSX.Element = <p className={classes.join(" ")}>{children}</p>;

  if (skeleton) {
    element = (
      <div className="w-full">
        <Skeleton count={2} />
      </div>
    );
  }

  return element;
};

export default Paragraph;

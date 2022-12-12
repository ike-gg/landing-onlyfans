import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  align?: "center" | "left" | "right";
}

const Paragraph: React.FC<Props> = (props) => {
  const { align } = props;

  const classes = [
    "text-base",
    "font-normal",
    "leading-relaxed",
    "tracking-wider",
    "text-slate-400",
  ];

  if (align) classes.push(`text-${align}`);
  else classes.push("text-center");

  return <p className={classes.join(" ")}>{props.children}</p>;
};

export default Paragraph;

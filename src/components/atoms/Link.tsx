import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Link: React.FC<Props> = ({ children, href }) => {
  return (
    <a
      className="inline-block w-full text-white font-medium text-base  rounded-full p-2 bg-primary"
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;

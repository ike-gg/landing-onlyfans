import React from "react";
import Skeleton from "react-loading-skeleton";
import { Content } from "../types/types";
import Paragraph from "./atoms/Paragraph";
import Title from "./atoms/Title";

interface Props {
  details?: Content;
  location: string;
}

const Profile: React.FC<Props> = (props) => {
  const { details } = props;

  if (!details) {
    return (
      <div className="w-full">
        <Skeleton className="p-10"></Skeleton>
      </div>
    );
  }
  const { link, age, avatarUrl, nick } = details;
  const { location } = props;

  return (
    <a
      href={link}
      className="flex items-center bg-slate-50 p-4 rounded-2xl w-full gap-6 border-2 border-gray-50 hover:border-primary/10 hover:bg-primary/5 ease-linear duration-75"
    >
      <img
        className="w-auto h-16 object-cover rounded-full aspect-square"
        src={avatarUrl}
        alt="profile"
      ></img>
      <div className="flex flex-col text-left justify-between">
        <Title>
          {nick}{" "}
          <span className="material-symbols-outlined text-lg">
            check_circle
          </span>
        </Title>
        <Paragraph align="left">🎂 {age} years, 🟢 Online Now</Paragraph>
        <Paragraph align="left">📍 {location}</Paragraph>
      </div>
    </a>
  );
};

export default Profile;

import React from "react";
import Paragraph from "./atoms/Paragraph";
import Title from "./atoms/Title";

interface Props {
  location: string;
  url: string;
  nickname: string;
  age: string;
  avatarURL: string;
}

const Profile: React.FC<Props> = (props) => {
  const { location, url, nickname, age, avatarURL } = props;
  return (
    <a
      href={url}
      className="flex items-center bg-slate-50 p-4 rounded-2xl w-full gap-6 border-2 border-gray-50 hover:border-primary/10 hover:bg-primary/5 ease-linear duration-75"
    >
      <img
        className="w-auto h-16 object-cover rounded-full aspect-square"
        src={avatarURL}
        alt="profile"
      ></img>
      <div className="flex flex-col text-left justify-between">
        <Title>
          {nickname}{" "}
          <span className="material-symbols-outlined">check_circle</span>
        </Title>
        <Paragraph align="left">🎂 {age} years, 🟢 Online Now</Paragraph>
        <Paragraph align="left">📍 {location}</Paragraph>
      </div>
    </a>
  );
};

export default Profile;

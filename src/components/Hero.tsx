import { useEffect, useState } from "react";
import Link from "./atoms/Link";
import Paragraph from "./atoms/Paragraph";
import PhotoSlider from "./PhotoSlider";
import Profile from "./Profile";

interface Props {
  location: string;
}

interface ApiResponse {
  avatar: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  onlyfansNick: string;
  onlyfansLink: string;
  age: string;
}

interface Details {
  avatarURL: string;
  nick: string;
  link: string;
  age: string;
}

const Hero: React.FC<Props> = ({ location }) => {
  const [details, setDetails] = useState<Details>();
  useEffect(() => {
    const fetchImages = async () => {
      const rawData = await fetch(
        "https://sins-agency-backend.vercel.app/api/getLandingContent"
      );
      const data = (await rawData.json()) as ApiResponse;
      setDetails({
        age: data.age,
        avatarURL: data.avatar.fields.file.url,
        link: data.onlyfansLink,
        nick: data.onlyfansNick,
      });
    };

    fetchImages().catch(console.error);
  }, []);

  return (
    <section className="max-w-md w-auto m-auto text-center">
      <PhotoSlider />
      <section className="flex flex-col items-center w-11/12 m-auto gap-4 mb-20">
        {details && (
          <Profile
            location={location}
            age={details.age}
            nickname={details.nick}
            url={details.link}
            avatarURL={details.avatarURL}
          />
        )}
        <Paragraph>
          Get exclusive access to my content and interact with me directly.
        </Paragraph>
        <Paragraph>
          🍑💦 Do you live near {location} DM me about making content ;) 🔥🍑
        </Paragraph>
        {details && <Link href={details.link}>SEE MY ONLYFANS ❤️</Link>}
      </section>
    </section>
  );
};

export default Hero;

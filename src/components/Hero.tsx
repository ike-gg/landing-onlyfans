import type { Content, ApiResponse } from "../types/types";

import { useEffect, useState } from "react";
import Link from "./atoms/Link";
import Paragraph from "./atoms/Paragraph";
import PhotoSlider from "./PhotoSlider";
import Profile from "./Profile";

const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

interface Props {
  location: string;
}

const Hero: React.FC<Props> = ({ location }) => {
  const [content, setContent] = useState<Content>();
  const [contentLoaded, setContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchContent = async () => {
      const rawData = await fetch(`${BACKEND_ENDPOINT}/api/getLandingContent`);
      const data = (await rawData.json()) as ApiResponse;

      const images = data.gallery.map((image) => {
        const url = image.fields.file.url;
        const id = image.sys.id;
        return { url, id };
      });

      document.title = `💗 ${data.onlyfansNick}`;

      setContent({
        images,
        age: data.age,
        avatarUrl: data.avatar.fields.file.url,
        link: data.onlyfansLink,
        nick: data.onlyfansNick,
      });
      setContentLoaded(true);
    };

    fetchContent().catch(console.error);
  }, []);

  return (
    <section className="max-w-md w-auto m-auto text-center">
      <PhotoSlider images={content?.images} />
      <section className="flex flex-col items-center w-11/12 m-auto gap-4 mb-20">
        <Profile details={content} location={location} />
        <Paragraph skeleton={!contentLoaded}>
          Get exclusive access to my content and interact with me directly.
        </Paragraph>
        <Paragraph skeleton={!contentLoaded}>
          🍑💦 Do you live near {location} DM me about making content ;) 🔥🍑
        </Paragraph>
        {content && <Link href={content.link}>SEE MY ONLYFANS ❤️</Link>}
      </section>
    </section>
  );
};

export default Hero;

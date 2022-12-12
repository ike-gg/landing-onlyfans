import Link from "./atoms/Link";
import Paragraph from "./atoms/Paragraph";
import PhotoSlider from "./PhotoSlider";
import Profile from "./Profile";

interface Props {
  location: string;
}

const Hero: React.FC<Props> = ({ location }) => {
  return (
    <section className="max-w-md w-auto m-auto text-center">
      <PhotoSlider />
      <section className="flex flex-col items-center w-11/12 m-auto gap-4 mb-20">
        <Profile location={location} />
        <Paragraph>
          Get exclusive access to my content and interact with me directly.
        </Paragraph>
        <Paragraph>
          🍑💦 Do you live near {location} DM me about making content ;) 🔥🍑
        </Paragraph>
        <Link href="https://google.com">SEE MY ONLYFANS ❤️</Link>
      </section>
    </section>
  );
};

export default Hero;

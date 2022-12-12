import Link from "./components/atoms/Link";
import Paragraph from "./components/atoms/Paragraph";
import Header from "./components/Header";
import PhotoSlider from "./components/PhotoSlider";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Header />
      <section className="max-w-md w-auto m-auto text-center">
        <PhotoSlider />
        <section className="flex flex-col items-center w-11/12 m-auto gap-4 mb-20">
          <Profile />
          <Paragraph>
            Get exclusive access to my content and interact with me directly.
          </Paragraph>
          <Paragraph>
            🍑💦 Do you live near Dolna Śląska Podwierczówa DM me about making
            content ;) 🔥🍑
          </Paragraph>
          <Link href="https://google.com">SEE MY ONLYFANS ❤️</Link>
        </section>
      </section>
    </div>
  );
}

export default App;

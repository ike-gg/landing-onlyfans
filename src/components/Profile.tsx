import Paragraph from "./atoms/Paragraph";
import Title from "./atoms/Title";

const Profile = () => {
  return (
    <div className="flex items-center bg-slate-50 p-5 rounded-2xl w-full gap-6 border-2 border-slate-100">
      <img
        className="w-auto h-16 object-cover rounded-full aspect-square"
        src="https://picsum.photos/100/100"
        alt="profile"
      ></img>
      <div className="flex flex-col text-left justify-between">
        <Title>
          @JoniMakaroni{" "}
          <span className="material-symbols-outlined">check_circle</span>
        </Title>
        <Paragraph align="left">🎂 19 years, 🟢 Online Now</Paragraph>
        <Paragraph align="left">📍 Szczecin</Paragraph>
      </div>
    </div>
  );
};

export default Profile;

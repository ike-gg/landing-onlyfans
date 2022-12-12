//@ts-ignore
import logo from "../images/of-logo.webp";

const Header = () => {
  return (
    <nav className="flex justify-center h-14 p-2 border-b border-slate-300">
      <img src={logo} alt="logo" className="w-auto object-contain"></img>
    </nav>
  );
};

export default Header;

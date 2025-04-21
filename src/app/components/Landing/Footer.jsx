import ThemeToggle from "../ThemeToogle";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-[60px] flex justify-end items-center px-[20px] py-4 ">
      <ThemeToggle />
    </footer>
  );
};

export default Footer;

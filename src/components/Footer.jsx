import { Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer
      className="bg-[#EFEEEB] h-36 flex items-center justify-center md:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex flex-col items-center md:flex-row md:justify-between w-full px-4 md:px-32">
        <div className="flex gap-3 justify-center items-center mb-4">
          <span className="text-[#43403B] text-base font-medium">
            Get in touch
          </span>
          <a
            href=""
            className="flex justify-center items-center w-8 h-8 bg-[#43403B] text-white rounded-full"
          >
            <Linkedin />
          </a>
          <a
            href=""
            className="flex justify-center items-center w-8 h-8 bg-[#43403B] text-white rounded-full"
          >
            <Github />
          </a>
          <a
            href=""
            className="flex justify-center items-center w-8 h-8 bg-[#43403B] text-white text-2xl font-semibold rounded-full no-underline"
          >
            G
          </a>
        </div>
        <a href="/" className="text-[#26231E] font-medium mx-3">
          Home page
        </a>
      </div>
    </footer>
  );
}

export default Footer;

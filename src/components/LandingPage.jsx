import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  return (
    <main
      className="bg-[#F9F8F6] w-full px-4 py-10 md:py-16 mx-auto md:flex justify-center items-center "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-14 md:px-32">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-4xl text-[#26231E] md:text-6xl md:text-right font-semibold mb-10">
            Stay <br className="hidden md:block" />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="text-[#75716B] text-lg font-medium md:text-right">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Man with a cat"
          className="h-[530px] object-cover rounded-lg shadow-lg md:w-96 mx-4 mb-8 md:mb-0 "
        />
        <div className="md:w-1/3 mb-8 md:mb-0 ">
          <h4 className="text-xs text-[#75716B] mb-2">-Author</h4>
          <h2 className="text-2xl text-[#26231E] font-semibold mb-4">
            Thompson P.
          </h2>
          <p className="text-[#75716B] text-lg font-medium">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <br />
          <p className="text-[#75716B] text-lg font-medium">
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}

export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav
      className="bg-[#F9F8F6] w-full h-20 py-3 px-6 border-b border-solid border-[#DAD6D1] flex items-center md:flex justify-between md:py-4 md:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <button
        className="text-black text-2xl font-bold no-underline"
        onClick={() => navigate("/")}
      >
        hh<span className="text-green-500">.</span>
      </button>
      <div className="hidden md:flex space-x-4">
        <button
          className="flex items-center py-3 px-10 gap-2 rounded-full border-solid border border-[#75716B] font-medium"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
        <button
          className="flex items-center py-3 px-10 gap-2 bg-[#26231E] rounded-full border-solid border border-[#75716B] text-white font-medium"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden outline-none">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen rounded-none mt-4 flex flex-col gap-6 py-10 px-6">
          <button
            className="px-8 py-3 mx-4 mt-4 rounded-full text-center text-black border border-black no-underline"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-8 py-3 mx-4 mb-4 rounded-full text-center text-white bg-black border no-underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

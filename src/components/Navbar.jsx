function NavBar() {
  return (
    <nav className="bg-[#F9F8F6] w-full h-20 py-3 px-6 border-b border-solid border-[#DAD6D1] flex items-center md:flex justify-between md:py-4 md:px-32">
      <a href="" className="text-2xl font-bold no-underline">
        hh<span className="text-green-500">.</span>
      </a>
      <div className="hidden md:flex space-x-4">
        <button className="flex items-center py-3 px-10 gap-2 rounded-full border-solid border border-[#75716B]">
          Log in
        </button>
        <button className="flex items-center py-3 px-10 gap-2 bg-[#26231E] rounded-full border-solid border border-[#75716B] text-white">
          Sign up
        </button>
      </div>
      <div className="md:hidden flex flex-col gap-1 cursor-pointer">
        <span className="block w-6 h-0.5 bg-[#75716B]"></span>
        <span className="block w-6 h-0.5 bg-[#75716B]"></span>
        <span className="block w-6 h-0.5 bg-[#75716B]"></span>
      </div>
    </nav>
  );
}

export default NavBar;

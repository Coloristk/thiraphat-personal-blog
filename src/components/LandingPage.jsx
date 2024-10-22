export function HeroSection() {
  return (
    <main
      className="bg-[#F9F8F6] px-4 py-10 md:py-16 mx-auto"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-14 md:px-32">
        <div className="md:w-1/3 mb-8 md:mb-0 ">
          <h1 className="text-4xl text-[#26231E]  md:text-6xl md:text-right font-semibold mb-10">
            Stay <br className="hidden md:block" />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="text-[#75716B] text-lg font-medium">
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
  return (
    <nav
      className="bg-[#F9F8F6] w-full h-20 py-3 px-6 border-b border-solid border-[#DAD6D1] flex items-center md:flex justify-between md:py-4 md:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <a href="" className="text-2xl font-bold no-underline">
        hh<span className="text-green-500">.</span>
      </a>
      <div className="hidden md:flex space-x-4">
        <button className="flex items-center py-3 px-10 gap-2 rounded-full border-solid border border-[#75716B] font-medium">
          Log in
        </button>
        <button className="flex items-center py-3 px-10 gap-2 bg-[#26231E] rounded-full border-solid border border-[#75716B] text-white font-medium">
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

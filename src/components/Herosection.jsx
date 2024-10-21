function HeroSection() {
  return (
    <main className="bg-[#F9F8F6] px-4 py-10 md:py-16 mx-auto">
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-14">
        <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl text-[#26231E] sm:text-center md:text-6xl md:text-right font-bold mb-4">
            Stay <br className="hidden md:block" />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="text-[#75716B] text-lg md:text-right">
            Discover a World of Knowledge at Your Fingertips. <br /> Your Daily
            Dose of Inspiration and Information.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Man with a cat"
          className="h-[530px] object-cover rounded-lg shadow-lg md:w-96 mx-4 mb-8 md:mb-0 "
        />
        <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
          <h4 className="text-xs text-[#75716B] mb-2">-Author</h4>
          <h2 className="text-2xl text-[#26231E] font-bold mb-4">
            Thompson P.
          </h2>
          <p className="text-[#75716B] text-lg">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <br />
          <p className="text-[#75716B] text-lg">
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;

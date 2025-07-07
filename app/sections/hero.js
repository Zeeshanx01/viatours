import React from "react";

const Hero = () => {
  return (
    // D:\WEB_DEV\Published (Github)\viatours\public\assets\hero-bg.png
    <section className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero/hero-bg.png')" }}>




      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20  z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white px-4">


        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
          Choose a Country For Your Next Adventure?
        </h1>
        <p className="mb-8 text-sm text-white/70">From local escapes to far-flung adventures</p>

        {/* Search bar */}
        <form className="flex items-center justify-center max-w-xl bg-white rounded-full mx-auto">
          <button className="py-1 px-3 bg-gray500 rounded-full">
            <img className="w-7" src="/assets/hero/location.png" alt="" />

          </button>
          <input
            type="text"
            placeholder="Search destinations, tours, etc."
            className="w-full bg-white text-xs rounded-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className=" p-1 rounded-r-full font-semibold"
          >
            <img src="/assets/hero/Button.png" alt="" />
          </button>
        </form>


        <p className="my-8 text-sm text-white/70">Or browse the selected type</p>



        {/* Category tags (optional) */}
        <div className="flex justify-center gap-4 mt-6">
          <button>
            <span className="bg-white/20 text-white/80 px-6 py-3 rounded-full text-sm">Culture</span>

          </button>
          <span className="bg-white/20 text-white/80 px-6 py-3 rounded-full text-sm">Adventure</span>

          <button>

          </button>

          <span className="bg-white/20 text-white/80 px-6 py-3 rounded-full text-sm">Nature</span>
          <button>

          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

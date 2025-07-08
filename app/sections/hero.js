import React from "react";

const categories = [
  { label: "Culture" },
  { label: "Adventure" },
  { label: "Nature" },
  // Add more categories as needed
];

const bestOfNewYork = [
  {
    image: "/assets/hero/location1.png",
    location: "New York, USA",
    title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
    rating: "4.8 (243)",
    duration: "4 days",
    price: "$225",
  },
  {
    image: "/assets/hero/location2.png",
    location: "New York, USA",
    title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
    rating: "4.8 (243)",
    duration: "10 days",
    price: "$771",
  },
  {
    image: "/assets/hero/location3.png",
    location: "New York, USA",
    title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
    rating: "4.8 (243)",
    duration: "3 days",
    price: "$225",
  },
  {
    image: "/assets/hero/location4.png",
    location: "New York, USA",
    title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
    rating: "4.8 (243)",
    duration: "7 days",
    price: "$771",
  },
  // Add more cards as needed
];

const staycationPromo = [
  {
    bgImage: "/assets/hero/s3image1.png",
    subtitle: "Enjoy these cool staycation promotions.",
    title: "Best staycation deals",
    buttonText: "See Activities",
  },
  {
    bgImage: "/assets/hero/s3image2.png",
    subtitle: "Don't forget to check out these activities.",
    title: "All Time Favourite Activities in Dubai",
    buttonText: "See Activities",
  },
  {
    bgImage: "/assets/hero/s3image3.png",
    subtitle: "80% Discount",
    title: "Discover the wow of Europe",
    buttonText: "See Activities",
  },
];

const popularThings = [
  {
    icon: "/assets/hero/s4icon1.png",
    title: "City Tours",
    subtitle: "100+ Tours",
  },
  {
    icon: "/assets/hero/s4icon2.png",
    title: "Cultural Tours",
    subtitle: "80+ Tours",
  },
  {
    icon: "/assets/hero/s4icon3.png",
    title: "Day Cruises",
    subtitle: "60+ Tours",
  },
  {
    icon: "/assets/hero/s4icon4.png",
    title: "Bus Tours",
    subtitle: "100+ Tours",
  },
  {
    icon: "/assets/hero/s4icon5.png",
    title: "Beach Tours",
    subtitle: "80+ Tours",
  },
  {
    icon: "/assets/hero/s4icon6.png",
    title: "Food Tours",
    subtitle: "60+ Tours",
  },
  // Add more as needed
];


const destinations = [
  {
    image: "/assets/hero/s5image1.png",
    title: "Cruises",
    subtitle: "100+ Tours",
  },
  {
    image: "/assets/hero/s5image2.png",
    title: "Beach Tours",
    subtitle: "100+ Tours",
  },
  {
    image: "/assets/hero/s5image3.png",
    title: "City Tours",
    subtitle: "100+ Tours",
  },
  {
    image: "/assets/hero/s5image4.png",
    title: "Museum Tour",
    subtitle: "100+ Tours",
  },
  {
    image: "/assets/hero/s5image5.png",
    title: "Food",
    subtitle: "100+ Tours",
  },
  {
    image: "/assets/hero/s5image6.png",
    title: "Hiking",
    subtitle: "100+ Tours",
  },

  // Add more cards as needed
];



const Hero = () => {
  return (<>


    {/* sec-1 D&M */}
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



        {/* Category tags (dynamic, same design, 3 per row, wrap if more) */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {categories.map((cat) => (
            <button key={cat.label}>
              <span className="bg-white/20 text-white/80 px-6 py-3 rounded-full text-sm">{cat.label}</span>
            </button>
          ))}
        </div>


      </div>
    </section>


    {/* sec-2 D&M */}
    <section className="w-full pt-20 min-h-[70vh]">

      <div className="w-[70%] space-y-10 mx-auto bg-red400/50 ">



        <h1 className="text-2xl font-bold ">Best of <span className="text-stone-400">New York</span></h1>


        <div className="justify-center mx-auto flex flex-wrap gap-6 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1">


          {bestOfNewYork.map((card, idx) => (
            <div key={idx} className=" w-[15rem] max-lg:w-[17rem] max-sm:w-[20rem] max-sm:mx-auto  border border-gray-300/40 rounded-xl">
              <div>
                <img className="rounded-t-xl w-full" src={card.image} alt={card.title} />
              </div>



              <div className="relative p-2 space-y-2">
                <button className="bg-white w-8 h-8 absolute right-2 -top-4 rounded-full">

                </button>
                <p className="text-[0.5rem] pl-4 text-gray-500">{card.location}</p>

                <h1 className="text-xs font-semibold">{card.title}</h1>

                <p className="text-[0.5rem] pl-10">{card.rating}</p>


                <hr className="opacity-15" />
                <div className="flex justify-between items-center">
                  <p className="text-[0.5rem]">{card.duration}</p>
                  <p className="text-[0.5rem]">From <span className="text-xs"> {card.price}</span> </p>
                </div>

              </div>



            </div>
          ))}


        </div>


      </div>

    </section>






    {/* sec-3 D&M */}
    <section className="w-full pt-20 min-h-[70vh]">



      <div className="w-[70%] space-y-10 mx-auto bg-red400/50 ">


        <div className="flex flex-wrap bg-red300/70 gap-8 justify-center">
          {staycationPromo.map((promo, idx) => (
            <div
              key={idx}
              className="relative p-5 w-[20rem] h-[17rem] rounded-xl text-white flex flex-col bg-cover bg-center"
              style={{ backgroundImage: `url('${promo.bgImage}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 z-0 rounded-xl"></div>
              {/* content */}
              <div className="p-3 flex flex-col justify-between relative z-10 h-full w-full">
                <div className="space-y-2">
                  <p className="text-xs">{promo.subtitle}</p>
                  <h1 className="text-xl font-bold">{promo.title}</h1>
                </div>

                <div>

                  <button className="bg-white text-black text-sm py-4 px-6 rounded-xl">{promo.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>







    {/* sec-4 D&M */}
    <section className="w-full pt-20 min-h-[70vh]">



      <div className="w-[70%] flex max-md:flex-col max-lg:items-start max-md:items-center  justify-between items-center mx-auto bg-red400/50 ">


        <div className="space-y-6 p-4 w-[20rem] max-lg:mt-8">
          <h1 className="text-2xl font-bold">
            Popular things to do
          </h1>
          <p className="text-xs">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>

          <div>

            <button className="bg-[#EB662B] text-white text-sm py-4 w-full rounded-xl">See All</button>
          </div>
        </div>



        <div className=" bg-amber300/50 w-[50%] max-md:w-fit space-x-2 grid grid-cols-3 max-lg:grid-cols-2  flex-nowrap">




          {popularThings.map((item, idx) => (
            <div key={idx} className="w-[10rem] bg-red500/50 flex flex-col  my-10 space-y-7 items-center text-center">
              <div>
                <img className="w-8" src={item.icon} alt={item.title} />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl">{item.title}</h1>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}





        </div>






      </div>
    </section>



















    {/* sec-5 D&M */}
    <section className="w-full pt-20 min-h-[70vh]">

      <div className="w-[70%] space-y-10 mx-auto bg-red400/50 ">


        <div className="flex justify-between">


          <h1 className="text-2xl font-bold ">Trending Destinations</h1>

          <button className="text-sm">See all</button>

        </div>





        <div className="justify-center gap-4 flex flex-wrap  grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2">


          {destinations.map((card, idx) => (
            <div key={idx} className=" w-[10rem] rounded-xl">
              <div>
                <img className="rounded-xl w-full h-52   object-cover" src={card.image} alt={card.title} />
              </div>



              <div className=" p-2 space-y-2">


                <h1 className="text-sm font-semibold">{card.title}</h1>

                <p className="text-xs ">{card.subtitle}</p>



              </div>



            </div>
          ))}


        </div>


      </div>

    </section>

















  </>);
};

export default Hero;

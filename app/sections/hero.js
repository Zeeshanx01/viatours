import React from "react";

const categories = [
  { label: "Culture" },
  { label: "Food" },
  { label: "Nature" },
  { label: "Adventure" },
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


const tourz = [
  {
    icon: "/assets/hero/s6icon1.png",
    title: "Ultimate flexibility",
    subtitle: "You’re in control, with free cancellation and payment.",
  },
  {
    icon: "/assets/hero/s6icon2.png",
    title: "Memorable experiences",
    subtitle: "Browse and book tours and activities so incredible.",
  },
  {
    icon: "/assets/hero/s6icon3.png",
    title: "Quality at our core",
    subtitle: "High quality standards. Millions of reviews.",
  },
  // Add more as needed
];


const Hero = () => {
  return (<>


    {/* sec-1 D&M */}
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero/hero-bg.png')" }}>




      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10  z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-[50%] mx-auto text-center text-white px-4">


        {/* Headline */}
        <h1 className="text-[3.5rem] leading-[4.2rem] max-md:text-5xl font-bold mb-4 mt-20">
          Choose a Country For Your Next Adventure?
        </h1>
        <p className="mb-8 text-[0.8rem] text-white/80">From local escapes to far-flung adventures</p>

        {/* Search bar */}
        <form className="flex items-center mb-16 justify-center w-[52%] bg-white rounded-full mx-auto">
          <button className="py-1 pl-5 pr-2 bg-gray500 rounded-full">
            <img className="w-6" src="/assets/hero/location.png" alt="" />

          </button>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full bg-white text-xs rounded-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className=" p-2 rounded-r-full font-semibold"
          >
            <img src="/assets/hero/Button.png" alt="" />
          </button>
        </form>


        <p className="my-8 text-[0.8rem] text-white/80">Or browse the selected type</p>



        {/* Category tags (dynamic, same design, 3 per row, wrap if more) */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat) => (
            <button key={cat.label}>
              <span className="bg-white/20 text-white/80 px-12 py-4 rounded-full text-[0.75rem]">{cat.label}</span>
            </button>
          ))}
        </div>


      </div>
    </section>


    {/* sec-2 D&M */}
    <section className="w-full pt-24 min-h-[70vh]">

      <div className="w-[68%] space-y-10 mx-auto bg-red400/50 ">



        <h1 className="text-2xl font-bold ">Best of <span className="text-stone-400">New York</span></h1>


        <div className="justify-center mx-auto flex flex-wrap gap-6 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1">


          {bestOfNewYork.map((card, idx) => (
            <div key={idx} className=" w-[15rem] max-lg:w-[17rem] max-sm:w-[20rem] max-sm:mx-auto  border border-[#E7E6E6] rounded-xl">
              <div>
                <img className="rounded-t-xl w-full" src={card.image} alt={card.title} />
              </div>



              <div className="relative px-4 py-3 space-y-2">
                <button className="bg-white  w-8 h-8 absolute right-2 -top-4 rounded-full">

                </button>
                <p className="text-[0.65rem] pl-4 text-viaGray">{card.location}</p>

                <h1 className="text-[0.80rem] leading-[1.2rem] fontsemibold">{card.title}</h1>

                <p className="text-[0.65rem] pl-14">{card.rating}</p>


                {/* <hr className="bg-[#E7E6E6]" /> */}
                <div className="w-full h-[1px]  bg-[#E7E6E6]"></div>
                <div className="flex justify-between items-center">
                  <p className="text-[0.65rem]">{card.duration}</p>
                  <p className="text-[0.65rem]">From <span className="text-xs"> {card.price}</span> </p>
                </div>

              </div>



            </div>
          ))}


        </div>


      </div>

    </section>






    {/* sec-3 D&M */}
    <section className="w-full pt-20 pb-32 min-h-[45vh]">



      <div className="w-[70%] space-y-10 mx-auto bg-red400/50 ">


        <div className="flex flex-wrap bg-red300/70 gap-6 justify-center">
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

                  <button className="bg-white text-black text-[0.675rem] font-semibold py-4 pl-8 pr-14 rounded-lg">{promo.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>







    {/* sec-4 D&M */}
    <section className="w-full pt20 min-h-fit py-12 bg-viaLightOrange">



      <div className="w-[70%] flex max-md:flex-col max-lg:items-start max-md:items-center  justify-between items-center mx-auto bg-red400/50 ">


        <div className="space-y-6 p-4 w-[23rem] max-lg:mt-8">
          <h1 className="text-[1.45rem] font-bold">
            Popular things to do
          </h1>
          <p className="text-xs">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>

          <div>

            <button className="bg-[#EB662B] text-white text-sm py-4 w-full rounded-xl">See All</button>
          </div>
        </div>



        <div className=" bg-amber300/50 w-[50%] max-md:w-fit space-x-2 space-y-5 grid grid-cols-3 max-lg:grid-cols-2  flex-nowrap">




          {popularThings.map((item, idx) => (
            <div key={idx} className="w-[10rem] bg-white flex flex-col px-6 py-8 rounded-xl my10 space-y-4 items-center text-center">
              <div>
                <img className="w-14" src={item.icon} alt={item.title} />
              </div>
              <div className="space-y-[0.25rem]">
                <h1 className="text-[0.90rem]">{item.title}</h1>
                <p className="text-[0.775rem]">{item.subtitle}</p>
              </div>
            </div>
          ))}





        </div>






      </div>
    </section>



















    {/* sec-5 D&M */}
    <section className="w-full pt-20 bg-amber300 min-h-[50vh]">

      <div className="w-[70%] space-y-10 mx-auto bg-red400/50 ">


        <div className="flex justify-between pl-4 pr-10 hover:underline">


          <h1 className="text-2xl font-bold ">Trending Destinations</h1>

          <button className="text-[0.775rem] text-black/70 hover:underline">See all</button>

        </div>





        <div className="justify-center gap-4 flex flex-wrap  grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2">


          {destinations.map((card, idx) => (
            <div key={idx} className=" w-[10rem] space-x-3 space-y-2 rounded-xl">
              <div>
                <img className="rounded-xl w-full h-52   object-cover" src={card.image} alt={card.title} />
              </div>



              <div className=" py-2 space-y-2">


                <h1 className="text-sm font-semibold">{card.title}</h1>

                <p className="text-xs ">{card.subtitle}</p>



              </div>



            </div>
          ))}


        </div>


      </div>

    </section>










    {/* sec-6 D&M */}
    <section className="w-full pt-20 min-h-[70vh]">



      <div className="w-[80%] max-md:w-[98%]  bg-orange200/70 my-10 mx-auto bg-red400/50 ">


        <div className="flex max-md:flex-col relative w-[80%] max-md:w-full min-h-[62vh] max-md:min-h-[80vh] rounded-2xl bg-red500/50 bg-viaLightOrange max-lg:items-start max-md:items-center  justify-between items-center">


          <div className=" bg-amber300/50 w-[50%] space-y-10 max-md:w-fit md:ml-40 max-md:mt-4 space-x-2 ">

            <div className="w-40">

              <h1 className="text-[1.45rem] font-bold">
                Why choose tourz
              </h1>
            </div>


            <div className="space-y-10">

              {tourz.map((item, idx) => (
                <div key={idx} className="w[10rem] bg-red500/50 flex   my10 space-x-4 itemscenter textcenter">
                  <div>
                    <img className="w-12" src={item.icon} alt={item.title} />
                  </div>
                  <div className=" w-56 bg-red300 space-y-2">
                    <h1 className="text-[0.95rem]">{item.title}</h1>
                    <p className="text-[0.75rem]">{item.subtitle}</p>
                  </div>
                </div>
              ))}

            </div>




          </div>





          <div className=" absolute right-[-15rem] max-md:bottom-[-14rem] max-md:right-[1rem] ">
            <img className="rounded-xl w-[30rem] max-md:w-[28rem]" src="/assets/hero/s6image.png" alt="" />
          </div>


        </div>



      </div>
    </section>










    <section className="h-screen"></section>
  </>);
};

export default Hero;

import React from "react";
import Image from 'next/image';

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

const stats = [
  {
    icon: "/assets/hero/s7icon1.svg",
    number: "932M",
    label: "Total Donations",
  },
  {
    icon: "/assets/hero/s7icon2.svg",
    number: "24M",
    label: "Campaigns Closed",
  },
  {
    icon: "/assets/hero/s7icon3.svg",
    number: "10M",
    label: "Happy People",
  },
  {
    icon: "/assets/hero/s7icon4.svg",
    number: "65M",
    label: "Our Volunteers",
  },
];

const testimonials = [
  {
    title: "Great Work",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    image: "/assets/hero/s9-img1.png",
    name: "Courtney Henry",
    role: "Web Designer",
  },
  {
    title: "Great Work",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    image: "/assets/hero/s9-img1.png",
    name: "Courtney Henry",
    role: "Web Designer",
  },
  {
    title: "Great Work",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    image: "/assets/hero/s9-img1.png",
    name: "Courtney Henry",
    role: "Web Designer",
  },
];

const reviewStats = [
  {
    number: "4.9",
    description: "1000+ reviews on TripAdvisor. Certificate of Excellence",
  },
  {
    number: "16M",
    description: "Happy Customers",
  },
  {
    number: "Award winner",
    description: "G2’s 2021 Best Software Awards",
  },
];

const articles = [
  {
    image: "/assets/hero/s10-img1.png",
    date: 'April 06 2023',
    name: 'Ali Tufan',
    title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
  },
  {
    image: "/assets/hero/s10-img2.png",
    date: 'April 07 2023',
    name: 'Emily Johnson',
    title: "Exploring the Serengeti: A Wildlife Adventure",
  },
  {
    image: "/assets/hero/s10-img3.png",
    date: 'April 08 2023',
    name: 'By Maxwell Rhodes',
    title: "Into the Wild: An Unforgettable Safari Journey",
  },

  // Add more cards as needed
];






const Hero = () => {
  return (
    <>


      {/* sec-1 D&M */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero/hero-bg.png')" }}>




        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10  z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[50%] max-md:w-[90%] mx-auto text-center text-white px-4">


          {/* Headline */}
          <h1 className="text-[3.5rem] leading-[4.2rem] max-md:text-[2.5rem] max-md:leading-[2.9rem] font-bold mb-4 mt-20">
            Choose a Country For Your Next Adventure?
          </h1>
          <p className="mb-8 text-[0.8rem] text-white/80">From local escapes to far-flung adventures</p>

          {/* Search bar */}
          <form className="flex items-center mb-16 justify-center w-[52%] max-md:w-[95%] bg-white rounded-full mx-auto">
            <button className="py-1 pl-5 pr-2 bg-gray500 rounded-full">
              {/* <Image className="w-6 max-md:w-9" src="/assets/hero/location.png" alt="" width={24} height={24} /> */}
              <img className="w-6 max-md:w-9" src="/assets/hero/location.png" alt="" />
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
              {/* <Image className="max-md:w-9" src="/assets/hero/Button.png" alt="" width={24} height={24} /> */}
              <img className=" w-14 max-md:w-9" src="/assets/hero/Button.png" alt="" />
            </button>
          </form>


          <p className="my-8 text-[0.8rem] text-white/80">Or browse the selected type</p>



          {/* Category tags (dynamic, same design, 3 per row, wrap if more) */}
          <div className=" max-md:w-[70%] grid grid-cols-4 max-lg:grid-cols-2 max-sm:gap-x-6 max-md:gap-x-6 max-lg:gap-x-16 2xl:bg-red400/60  2xl:gap-y-0 mx-auto mt-10 mb-10 ">
            {categories.map((cat) => (
              <button key={cat.label}>
                <span className="inline-block w-40 max-lg:w-32 max-sm:w-24 bg-white/20 text-white/80 py-4 rounded-full text-[0.75rem] text-center">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>




        </div>
      </section>















      {/* sec-2 D&M */}
      <section className="w-full pt-24 max-md:mb-24 min-h-[70vh]">
        <div className="w-[70%] max-lg:w-[96%] space-y-10 mx-auto bg-red400/50">
          <h1 className="text-2xl font-bold ml-4 max-md:ml-6 ">
            Best of <span className="text-stone-400">New York</span>
          </h1>

          {/* This is the important change: justify-start instead of justify-center */}
          <div className="flex justify-center max-md:items-center bg-amber500/50 mx-auto max-w-full">
            <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 bg-red500/50 max-md:items-center max-md:justify-center gap-6'>


              {bestOfNewYork.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[100%] max-lg:w-[80%] m4 border border-[#E7E6E6] mx-auto rounded-xl max-xl:bgblue-500/50"
                >
                  <div>
                    <Image
                      className="rounded-t-xl w-full"
                      src={card.image}
                      alt={card.title}
                      width={224}
                      height={140}
                    />
                  </div>

                  <div className="relative px-4 py-3 space-y-2">
                    <button className="bg-white w-8 h-8 max-xl:w-14 max-xl:h-14 absolute right-2 -top-4 max-xl:-top-7 rounded-full"></button>
                    <p className="text-[0.65rem] max-xl:text-[1.0rem] pl-4 text-viaGray">{card.location}</p>
                    <h1 className="text-[0.80rem] max-xl:text-[1.5rem]  leading-[1.2rem] max-xl:leading-8 font-semibold">
                      {card.title}
                    </h1>
                    <p className="text-[0.65rem] max-xl:text-[1.0rem] pl-14">{card.rating}</p>

                    <div className="w-full h-[1px] bg-[#E7E6E6]"></div>
                    <div className="flex justify-between items-center">
                      <p className="text-[0.65rem] max-xl:text-[1.0rem]">{card.duration}</p>
                      <p className="text-[0.65rem] max-xl:text-[1.0rem]">
                        From <span className="text-xs">{card.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>




      {/* sec-3 D&M */}
      <section className="w-full pt-20 pb-32 min-h-[45vh]">



        <div className="w-[70%] space-y-10 mx-auto bg-blue400/50 ">


          <div className="flex max-md:flex-col max-md:items-center flexwrap bg-red300/70 gap-6 justify-center">
            {staycationPromo.map((promo, idx) => (
              <div
                key={idx}
                // w-[22rem]
                className="relative p-5 w-[31%] max-md:w-[90%] h-[18rem] max-md:h-[24rem] rounded-xl text-white flex flex-col bg-cover bg-center"
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



        <div className="w-[70%] flex max-lg:flex-col  justify-between items-center mx-auto bg-red400/50 ">


          <div className="space-y-6 p-4 w-[23rem] max-lg:mt-8">
            <h1 className="text-[1.60rem] font-bold">
              Popular things to do
            </h1>
            <p className="text-xs leading-5">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>

            <div>

              <button className="bg-viaOrange text-white text-sm py-4 w-full rounded-xl">See All</button>
            </div>
          </div>



          <div className=" bg-amber300/50 w-[50%] max-lg:w-[80%] max-md:w-[95%] max-lg:mt-6  gap-5 space-y-3 grid grid-cols-3 max-md:grid-cols-2  flex-nowrap">




            {popularThings.map((item, idx) => (
              <div key={idx} className="w[10rem] w-full bg-white flex flex-col px-6 py-8 rounded-xl my-1 space-y-4 items-center text-center">
                <div>
                  <Image className="w-16" src={item.icon} alt={item.title} width={56} height={56} />
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

        <div className="w-[70%] max-md:w-[95%] space-y-10 mx-auto bg-red400/50 ">


          <div className="flex justify-between pl-4 pr-10 ">


            <h1 className="text-2xl font-bold w-[70%]">Trending Destinations</h1>

            <button className="text-[0.775rem] text-black/70 hover:underline">See all</button>

          </div>





          <div className="  gap-4 grid justify-items-center grid-cols-6 max-xl:grid-cols-3 max-md:grid-cols-2">


            {destinations.map((card, idx) => (
              <div key={idx} className=" w-[100%] max-xl:w[5.5rem] space-x-1 space-y-2 rounded-xl">
                <div>
                  <Image className="rounded-xl w-full h-52   object-cover" src={card.image} alt={card.title} width={160} height={208} />
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
      <section className="w-full pt-20 max-lg:pb-40 min-h-[70vh] max-lg:min-h-[90vh]">  



        <div className="w-[80%] max-xl:w-[90%] max-lg:w-[98%]  bg-orange200/70 my-10 mx-auto bg-red400/50 ">


          <div className="flex max-lg:flex-col relative w-[80%] max-lg:w-full min-h-[67vh] max-lg:min-h-[80vh] rounded-2xl bg-red500/50 bg-viaLightOrange max-lg:items-center max-md:items-center  justify-between items-center">


            <div className=" bg-amber300/50 w-[80%] space-y-10 max-md:w-fit md:ml-50 max-md:mt-4 space-x-2 ">

              <div className="w-40">

                <h1 className="text-[1.60rem] font-bold">
                  Why choose tourz
                </h1>
              </div>


              <div className="space-y-10">

                {tourz.map((item, idx) => (
                  <div key={idx} className=" bg-red500/50 flex   my10 space-x-4 ">
                    <div>
                      <Image className="w-12" src={item.icon} alt={item.title} width={48} height={48} />
                    </div>
                    <div className=" w-60 bg-red300 space-y-2">
                      <h1 className="text-[0.95rem]">{item.title}</h1>
                      <p className="text-[0.75rem]">{item.subtitle}</p>
                    </div>
                  </div>
                ))}

              </div>




            </div>





            <div className=" absolute right-[-15rem] max-lg:bottom-[-10rem] max-lg:left-1/2 max-lg:-translate-x-1/2 max-md:translate-0 max-md:left-[1rem] max-md:right-[1rem]">
              <Image className="rounded-xl w-[30rem] max-mdw-[20rem] shrink-0 " src="/assets/hero/s6image.png" alt="" width={480} height={320} />
            </div>







            {/* <div className=" absolute right-[-15rem] max-lg:rightauto max-lg:bottom-[-14rem] max-lg:left-1/2 max-lg:-translate-x-1/2 ">
            <Image className="rounded-xl w-[30rem] max-md:w-[20rem] shrink-0 " src="/assets/hero/s6image.png" alt="" width={480} height={320} />
          </div> */}











          </div>



        </div>
      </section>




      {/* sec7 D&M */}
      <section className="w-full min-h-fit mt-32 mb-32" >

        <div className="w-[58%] max-lg:w-[90%] mx-auto max-md:grid max-md:grid-cols-2 gap-4 max-md:gap-y-20 flex justify-between bg-gray600/60">


          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-6 flex flex-col  justify-center items-center">
              <div>
                <Image className="w-14" src={stat.icon} alt="" width={56} height={56} />
              </div>
              <div className="text-center">
                <h1 className="text-[2.05rem] font-semibold">{stat.number}</h1>
                <p className="text-[0.85rem]">{stat.label}</p>
              </div>
            </div>
          ))}

        </div>

      </section>










      {/* sec-8 D&M */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero/s8-bg.png')" }}>




        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5  z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[50%] max-lg:w-[80%] max-md:w-[98%] mx-auto text-center text-white px-4">


          {/* Headline */}
          <h1 className="text-[3.9rem] leading-[4.2rem] max-md:text-5xl font-bold mb-4 md:mt-20">
            Keep things flexible
          </h1>
          <p className="w-[50%] mb-8 text-center mx-auto text-[0.8rem] text-white/80">Use Reserve Now & Pay Later to secure the activities you don&#39;t want to miss without being locked in.</p>

          <div className="w-full flex justify-center">
            <Image className="w-14" src="/assets/hero/s8-btn.svg" alt="" width={120} height={40} unoptimized />

          </div>

        </div>
      </section>







      {/* Testimonials Section */}
      {/* sec-9 D&M */}
      <section className="w-full min-h-fit bg-viaLightOrange">


        <div className="w-[70%] mx-auto pt-20 pb-20">



          <h1 className="text-2xl font-bold  pb-10">What our Travelers are saying</h1>


          <div className="flex max-lg:flex-col  justify-between bg-blue500/50 space-x-8 max-lg:space-y-8 max-lg:m-1">


            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white max-lg:w-[98%] space-y-4 rounded-xl px-4 py-6">


                <div className="space-y-2">
                  <h1 className="text-viaOrange text-[1.0rem]">{t.title}</h1>
                  <p className="text-[0.8rem]">&quot;{t.text}&quot;</p>
                </div>

                <div className="w-full h-[1px] bg-[#00000026]"></div>



                <div className="flex items-center space-x-3">


                  <div>
                    <Image className="w-11" src={t.image} alt={t.name} width={44} height={44} />
                  </div>

                  <div className="space-y1 text-[0.7rem] ">
                    <h1 className="font-semibold">{t.name}</h1>
                    <p>{t.role}</p>
                  </div>


                </div>


              </div>
            ))}



          </div>







          {/* Review Stats Section (below testimonials) */}
          <div className="w-full flex max-md:flex-col justify-between pt-10 space-x-8 max-md:space-y-4">


            {reviewStats.map((stat, idx) => (
              <div className="w-1/3 max-md:w-full  " key={idx}>
                <h1 className="text-[1.4rem] font-bold">{stat.number}</h1>
                <p className="text-[0.8rem] ">{stat.description}</p>
              </div>
            ))}



          </div>










        </div>





      </section>













      {/* sec-10 D&M */}
      <section className="w-full pt-28 pb-24 bg-amber300 min-h-[50vh]">

        <div className="w-[70%] max-sm:w-[95%]  space-y-10 mx-auto bg-red400/50 ">


          <div className="flex justify-between pl-4 pr-10 ">


            <h1 className="text-2xl font-bold ">Travel Articles</h1>

            <button className="text-[0.775rem] text-black/70 hover:underline">See all</button>

          </div>





          <div className="justify-center gap-4 flex max-lg:flex-col max-lg:items-center">


            {articles.map((card, idx) => (
              <div key={idx} className="relative w-1/3 max-lg:w-[70%] space-x-3 space-y-4 rounded-xl">
                <div>
                  <Image className="rounded-xl w-full h-60   object-cover" src={card.image} alt={card.title} width={240} height={240} />
                </div>


                <div className="absolute top-4 left-4">
                  <button className='bg-white rounded-full px-3 py-1 text-[0.8rem] '>Trips</button>
                </div>
                <div className=" py-2 space-y-4">


                  <div className="flex space-x-2">

                    <p className="text-xs ">{card.date}</p>
                    <p className="text-xs ">By {card.name}</p>
                  </div>
                  <h1 className="text-sm font-semibold pr-4">{card.title}</h1>



                </div>



              </div>
            ))}

          </div>


        </div>

      </section>










      {/* sec-11 D&M */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover  bg-right" style={{ backgroundImage: "url('/assets/hero/s11-bg.png')" }}>




        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10  z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[72%] max-md:w-[98%] bg-red500/30 flex justify-start mx-auto  text-white px-4">

          <div className='flex flex-col justify-start max-lg:items-center max-lg:text-center w-[35%] max-lg:w-[100%]   bg-red500/50'>

            {/* Headline */}
            <h1 className="text-[1.66rem] max-xl:text-[1.96rem] leading-[2.2rem]    font-bold mb-4 mt20">
              Subscribe To Our Mailing List And Stay Up To Date
            </h1>


            <p className=" mb-8 max-lg:mx-auto  bg-red500/50 text-[0.8rem] text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="w-full max-w-md ">
              <form className="flex items-center  p-2 pl-4 rounded-lg overflow-hidden bg-white/20 shadow-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1  text-sm outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-black text-sm rounded-lg  px-6 py-4 max-xl:py-2 "
                >
                  Subscribe
                </button>
              </form>
            </div>




          </div>

        </div>
      </section>


















    </>);
};

export default Hero;

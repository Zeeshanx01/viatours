import React from 'react'
import Link from 'next/link'

const footer = () => {
  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Tourz Reviews", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Travel Guides", href: "#" },
    { label: "Data Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Sitemap", href: "#" },
  ];

  const supportLinks = [
    { label: "Get in Touch", href: "#" },
    { label: "Help center", href: "#" },
    { label: "Live chat", href: "#" },
    { label: "How it works", href: "#" },
  ];

  const appLinks = [
    { label: "iOS App", href: "#" },
    { label: "Android App", href: "#" },
  ];

  const footerImages = [
    { src: "/assets/footer/img1.png", alt: "Footer Image 1" },
    { src: "/assets/footer/img2.png", alt: "Footer Image 2" },
    { src: "/assets/footer/img3.png", alt: "Footer Image 3" },
    { src: "/assets/footer/img4.png", alt: "Footer Image 4" },
    { src: "/assets/footer/img5.png", alt: "Footer Image 5" },
    { src: "/assets/footer/img6.png", alt: "Footer Image 6" },
  ];

  return (<>


    <footer className='bg-viaPurple text-white'>












      {/* sec-1 D&M */}
      <section className="w-full min-h-fit ">
        <div className='w-[80%] bg-red500/50 py-16 mx-auto flex justify-between'>
          <p className='w-1/2 text-center'>Speak to our expert at1-800-453-6744</p>
          <p className='w-1/2 text-center ml-8 text-[0.9rem] bg-amber200'>Follow Us</p>
        </div>
      </section>














      <div className='w-full h-[1px] bg-[#FFFFFF26]'></div>












      {/* sec-2 D&M */}

      <section className="w-full min-h-fit">
        <div className='w-[70%] mx-auto py-10 flex justify-between space-x-4'>


          <div className='w-[40%] space-y-4'>
            <h1 className='text-[1rem]'>Contact</h1>
            <div className='text-[0.75rem] text-white/80'>
              <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
              <p>hi@viatours.com</p>
            </div>
          </div>


          <div className='w-[20%] space-y-4 ml-10'>
            <h1 className='text-[1rem] text-white/80'>Company</h1>
            <div className='flex flex-col space-y-3 text-[0.75rem] text-white/80'>
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

          </div>




          <div className='w-[14%] space-y-4'>
            <h1 className='text-[1rem]'>Support</h1>
            <div className='flex flex-col space-y-3 text-[0.75rem] text-white/80'>
              {supportLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

          </div>



          <div className='w-[26%] space-y-4'>

            <div className='space-y-4'>
              <h1 className='text-[1rem]'>Newsletter</h1>
              <div className='text-[0.75rem] text-white/80 space-y-2'>

                <p>Subscribe to the free newsletter and stay up to date</p>
                <form className="flex items-center  pl-2 rounded-lg overflow-hidden bg-white text-black/60 shadow-sm">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1  text-[0.6rem] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black text-[0.6rem] rounded-lg font-semibold px-2 py-3 "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>


            <div className='space-y-4'>
              <h1 className='text-[1rem]'>Mobile Apps</h1>
              <div className='text-[0.75rem] text-white/80 flex flex-col space-y-3 pl-4'>
                {appLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>



          </div>






        </div>
      </section>















      <div className='w-full h-[1px] bg-[#FFFFFF26]'></div>














      {/* sec-3 D&M */}
      <section className="w-full min-h-fit ">
        <div className='w-[70%] bg-red500/50 py-8 px-1 mx-auto flex justify-between'>
          <p className='w-1/2 text-[0.8rem] text-white/80'>© Copyright Viatours 2024</p>
          <div className='flex'>
            {footerImages.map((image) => (
              <img className='w-8' key={image.alt} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </section>





















    </footer>


  </>)
}

export default footer

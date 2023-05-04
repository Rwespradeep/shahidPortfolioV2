import React from "react";

const Contactus = () => {
  return (
    <div className="lg:h-screen lg:w-screen lg:overscroll-x-none">
      <h1 className="font-figtree mt-24 text-3xl text-center md:text-5xl md:p-4 lg:p-1 lg:text-start lg:text-5xl lg:ml-28 text-[#4F4F4F] ">
        CONTACT US
      </h1>
      <div className="bg-[url('./contact_images/contact_cover2.webp')] bg-no-repeat bg-cover h-[650px]">
        {/* writeme card */}
        <div
          className="w-80 h-[250px] ml-14 relative top-10 lg:w-[450px] lg:h-[370px] border-2 border-black
        md:relative md:top-40 md:left-72 md:w-80 
        lg:ml-28 lg:mt-16 lg:p-15 lg:relative lg:left-4 lg:top-32 bg-white"
        >
          <h2 className="ml-10 text-xl mt-5 lg:ml-16 lg:mt-10 font-oswald lg:text-3xl font-light text-black">
            WRITE ME
          </h2>
          <div className="flex flex-col ml-8 w-52 lg:w-80 lg:ml-16 p-2 font-figtree text-[#4F4F4F]">
            <input
              className="mt-5 border-b-2 border-gray-500 outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="my-5 border-b-2 border-gray-500 outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              type="text"
              className="border-b-2 border-gray-500 outline-none"
              placeholder="Message"
            />

            <button className="mt-20 mr-8 lg:mr-0 relative left-10 lg:left-0 p-4 lg:mt-6 font-oswald text-white lg:p-2 bg-gray-950 hover:bg-white hover:text-black">
              SEND
            </button>
          </div>
        </div>

        <div className="hidden lg:font-figtree lg:text-white lg:flex lg:flex-col lg:absolute lg:right-8">
          <h1>8179016122</h1>
          <h1>shahidkhan@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

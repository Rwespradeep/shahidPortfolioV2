import React from "react";

const Aboutme = () => {
  return (
    <div className="md:relative lg:flex lg:relative lg:h-screen md:top-[100px] md:justify-center lg:top-[200px] lg:left-28 lg:w-screen lg:overscroll-x-none">
      <div className="hidden md:flex md:justify-center lg:block lg:w-1/2 lg:flex-1 lg:text-[#4F4F4F]">
        <img
          className="md:w-25 md:m-10 md:p-10 lg:w-[600px]"
          src="./aboutme_images/about_me1.webp"
          alt="aboutme_image"
        />
      </div>

      <div className="relative text-center w-[350px] text-[#4F4F4F] md:absolute md:top-28 md:left-72 md:text-white lg:relative lg:justify-normal lg:top-10 lg:-left-2 lg:w-1/2 lg:flex-1 lg:text-[#4F4F4F]">
        <h1 className="absolute top-2 bottom-2 left-12 text-center font-figtree text-3xl ml-20 md:text-3xl lg:text-4xl lg:h-20 tracking-wider lg:-ml-2 lg:w-15 lg:text-start">
          ABOUT ME
        </h1>
        <p className="font-oswald relative top-12 left-8 lg:text-start lg:text-lg lg:font-light lg:tracking-widest lg:pt-5 lg:m-1">
          NATURE ITSELF INSPIRES ME
        </p>
        <div className="relative top-16 left-8 lg:w-[550px]">
          <p className="font-figtree text-sm text-justify md:text-base lg:text-lg lg:text-justify lg:p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

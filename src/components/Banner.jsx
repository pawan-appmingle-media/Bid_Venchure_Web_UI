import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[500px] w-full bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <div className=" bg-opacity-50 px-6 py-8 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-thin leading-tight">
          MAKING BRANDS STAND OUT <br /> IS OUR OBSESSION
        </h1>
      </div>
    </div>
  );
};

export default Banner;

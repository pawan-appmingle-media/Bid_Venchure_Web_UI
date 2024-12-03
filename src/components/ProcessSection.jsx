import React from "react";

const ProcessSection = () => {
  return (
    <>
      <div id="process" className="bg-gray-100 p-10 border">
        <h1 className="text-center mb-10 text-2xl relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-200 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
          HOW WE MAKE BRANDS THRIVE
        </h1>
        <div className="process-card w-[320px]">
          <img
            src="https://assets.website-files.com/530ab3ac7b5bc4ca19000b96/530b7763b9b97cdf3e0008b9_icon-target.png"
            alt="img"
            className="w-[320px] h-[320px] bg-gray-300"
          />
          <div className="heading">SET A TARGET</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </p>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;

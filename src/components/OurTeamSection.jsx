import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ImMail3 } from "react-icons/im";

const OurTeamSection = () => {
  return (
    <>
      <div id="team">
        <div className="bg-[whhitesmoke] py-10">
          <h1 className="text-center mb-10 text-2xl relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-200 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
            OUR TEAM
          </h1>

          <div className="flex flex-wrap justify-center w-[1024px] m-auto border">
            {/* Team Card 1 */}
            <div className="bg-white p-5 rounded-lg">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="team member"
                  className="w-[200px] h-[200px] object-cover rounded-full p-1"
                />
              </div>
              <div className="text-center">
                <p className="font-thin text-lg">Ron Swanson</p>
                <p className="text-gray-500">Founder</p>
                <div className="flex justify-between w-1/2 m-auto">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <ImMail3 />
                </div>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white p-5 rounded-lg">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="team member"
                  className="w-[200px] h-[200px] object-cover rounded-full p-1"
                />
              </div>
              <div className="text-center">
                <p className="font-thin text-lg">Ron Swanson</p>
                <p className="text-gray-500">Founder</p>
                <div className="flex justify-between w-1/2 m-auto">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <ImMail3 />
                </div>
              </div>
            </div>

            {/* Team Card 3 */}
            <div className="bg-white p-5 rounded-lg">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="team member"
                  className="w-[200px] h-[200px] object-cover rounded-full p-1"
                />
              </div>
              <div className="text-center">
                <p className="font-thin text-lg">Ron Swanson</p>
                <p className="text-gray-500">Founder</p>
                <div className="flex justify-between w-1/2 m-auto">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <ImMail3 />
                </div>
              </div>
            </div>

            {/* Team Card 4 */}
            <div className="bg-white p-5 rounded-lg">
              <div className="mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="team member"
                  className="w-[200px] h-[200px] object-cover rounded-full p-1"
                />
              </div>
              <div className="text-center">
                <p className="font-thin text-lg">Ron Swanson</p>
                <p className="text-gray-500">Founder</p>
                <div className="flex justify-between w-1/2 m-auto">
                  <FaTwitter />
                  <FaLinkedinIn />
                  <ImMail3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamSection;

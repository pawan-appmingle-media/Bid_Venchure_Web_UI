import React from "react";

const Gallery = () => {
  // Card data
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 1",
      subheading: "Subheading 1",
    },
    {
      image:
        "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 2",
      subheading: "Subheading 2",
    },
    {
      image:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 3",
      subheading: "Subheading 3",
    },
    {
      image:
        "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 4",
      subheading: "Subheading 4",
    },
    {
      image:
        "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 5",
      subheading: "Subheading 5",
    },
    {
      image:
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 6",
      subheading: "Subheading 6",
    },
    {
      image:
        "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 7",
      subheading: "Subheading 7",
    },
    {
      image:
        "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 8",
      subheading: "Subheading 8",
    },
    {
      image:
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
      heading: "Card Heading 9",
      subheading: "Subheading 9",
    },
  ];

  return (
    <>
      <div id="projects" className="bg-gray-100 py-10">
        <h1 className="text-center mb-10 text-2xl relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-300 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
          RECENET PROJECTS
        </h1>
        <div className="w-[1024px] mx-auto grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card relative bg-white shadow-md transition-transform duration-300 hover:translate-y-[-10px]"
            >
              <img
                src={card.image}
                alt={`Card Image ${index + 1}`}
                className="w-[320px] h-[280px] object-cover mx-auto"
              />
              <div className="pb-4">
                <h3 className="text-center mt-4 font-semibold text-xl">
                  {card.heading}
                </h3>
                <p className="text-center text-gray-600">{card.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

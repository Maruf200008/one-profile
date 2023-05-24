import {
  arrayDestruct,
  installNode,
  navbar,
  reactParallax,
  reactSmooth,
  reactWeather,
} from "../../public/assets";

import Image from "next/image";

const Portfoli = () => {
  const portfolis = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 mt-[150px] md:mt-0">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolis.map(({ src, id }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <Image
                src={src}
                alt="images"
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoli;

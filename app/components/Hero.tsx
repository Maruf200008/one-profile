import { heroImage } from "@/public/assets/intex";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className=" flex  h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" text-white flex flex-col justify-center h-full space-y-5">
          <h2 className=" text-4xl md:text-7xl font-bold">
            I'm a Full Stack Developer
          </h2>
          <p className=" text-gray-400 max-w-md">
            I have 8 years experience building and desgining software.
            Currently, I love to work on Web Application using technologies like
            : React, TailwindCss, Redux, Next JS & Node JS{" "}
          </p>
          <div>
            <button className=" group px-6 py-3 my-2 w-fit flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className=" group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className=" ml-1" />
              </span>{" "}
            </button>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="hero image"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

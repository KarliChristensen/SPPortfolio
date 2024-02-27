import Image from "next/image";
import githubIcon from "../public/icons/githubNew.svg";
import linkedinIcon from "../public/icons/linkedinNew.svg";
import mailIcon from "../public/icons/mailNew.svg";
import padleClient from "../public/images/padleClient.png";
import secondServing from "../public/images/SecondServing.png";
import gogos from "../public/images/Gogos.png";

export default function Home() {
  return (
    <div
      id="main-container"
      className="noise w-full h-full overflow-hidden flex md:py-40 md:px-20 md:justify-center md:items-center"
    >
      <div
        id="main-container-inner"
        className="w-full h-full m-0 md:m-6 relative flex justify-center items-center pb-20"
      >
        <svg
          id="top-left-border-box"
          className="left-0 top-0 h-1/4 md:h-1/2 w-1/3 absolute border-t-4 border-l-4 md:border-t-8 md:border-l-8 rounded-tl-lg border-slate-300"
        ></svg>
        <svg
          id="bottom-right-border-box"
          className="right-0 bottom-0 h-1/4 md:h-1/2 w-1/3 absolute border-b-4 border-r-4 md:border-b-8 md:border-r-8 rounded-br-lg border-slate-300"
        ></svg>
        <div id="main-contents" className="w-[90%] h-full p-5 mt-16">
          <div className="flex flex-row justify-between">
            <h1 className="glitch text-slate-300 text-3xl ml-0">
              DIGITAL PORTFOLIO
            </h1>
            <div className="m-0">
              <ul className="flex flex-row">
                <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200 ml-10">
                  <a href="https://github.com/KarliChristensen" className="">
                    {" "}
                    <Image src={githubIcon} alt="Check out this Github" />
                  </a>
                </li>
                <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200 ml-10">
                  <a
                    href="https://www.linkedin.com/in/karlichristensen/"
                    className=""
                  >
                    {" "}
                    <Image
                      src={linkedinIcon}
                      alt="And then look at this LinkedIn"
                    />
                  </a>
                </li>
                <li className="w-[30px] h-[30px] hover:scale-110 ease-out duration-200 ml-10">
                  <a href="mailto:karlichristensen@post.com?subject=Mail%20from%20Portfolio.com">
                    {" "}
                    <Image
                      src={mailIcon}
                      alt="What about this rocking mail link!"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 w-full h-full">
            <div className="2xl:grid 2xl:grid-cols-3 flex flex-col gap-2 2xl:flex-none font-mono h-fit">
              <div className="opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative">
                <div className="absolute bottom-0 left-0 md:ml-4 mb-3 z-10 text-black"></div>
                <Image
                  className="max-h-[200px] rounded-sm object-cover w-full h-full transition-all duration-1000 scale-100"
                  src={padleClient}
                  alt="Stuff"
                ></Image>
              </div>
              <div className="col-span-2 opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative">
                <Image
                  className="max-h-[200px] rounded-sm object-cover w-full h-full transition-all duration-1000 scale-100"
                  src={secondServing}
                  alt="Stuff"
                ></Image>
              </div>
              <div className="col-span-2 opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative">
                <Image
                  className="max-h-[200px] rounded-sm object-cover w-full h-full transition-all duration-1000 scale-100"
                  src={gogos}
                  alt="Stuff"
                ></Image>
              </div>
              <div className="col-span-1 opacity-80 overflow-hidden hover:cursor-pointer hover:opacity-100 transition-all duration-1000 relative">
                <div className="max-h-[200px] rounded-sm object-cover w-full h-full transition-all duration-1000 scale-100">
                  <div className="h-[200px] w-full bg-black flex justify-center items-center">
                    <h1 className="text-white glitch fixed text-center text-6xl">YOUR PROJECT HERE?</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div
      id="main-container"
      className="noise w-full h-screen overflow-hidden flex justify-center items-center"
    >
      <div
        id="main-container-inner"
        className="max-h-[800px] w-full h-full m-0 md:m-10 relative flex justify-center items-center"
      >
        <svg
          id="top-left-border-box"
          className="left-0 top-0 h-1/2 w-1/3 absolute border-t-4 border-l-4"
        ></svg>
        <svg
          id="bottom-right-border-box"
          className="right-0 bottom-0 h-1/2 w-1/3 absolute border-b-4 border-r-4 "
        ></svg>
        <div
          id="main-contents"
          className="w-full h-full p-5"
        >
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam consequatur maxime voluptates voluptas dignissimos dolorum aliquid vitae magnam necessitatibus quidem, consequuntur fugiat libero tenetur, sequi ipsam sunt eius veritatis!</p>
        </div>
      </div>
    </div>
  );
}

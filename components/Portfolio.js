import React, { useState } from "react";
import Line from "@/public/Line.png";
import Image from "next/image";

export default function Portfolio() {
  const [active, setActive] = useState("websites");
  return (
    <div className="bg-bg3 flex flex-col items-center py-20 space-y-10 lg:px-64">
      <div className="border-b-5 border-white pb-2 w-fit">
        <p className="text-azul text-4xl text-center  font-black">
          Our Portfolio
        </p>
      </div>
      <div className="flex space-x-10">
        <div className="flex flex-col justify-start  items-start space-y-3">
          <div
            className="flex items-center space-x-2"
            onClick={() => setActive("websites")}
          >
            <p
              className={
                active === "websites"
                  ? "text-azul text-2xl cursor-pointer"
                  : "text-white text-2xl cursor-pointer"
              }
            >
              Websites
            </p>
            {active === "websites" ? (
              <Image src={Line} alt="bg" width={35} height={1} className="" />
            ) : null}
          </div>
          <div
            className="flex items-center space-x-2"
            onClick={() => setActive("apps")}
          >
            <p
              className={
                active === "apps"
                  ? "text-azul text-2xl cursor-pointer"
                  : "text-white text-2xl cursor-pointer"
              }
            >
              Mobile Apps
            </p>
            {active === "apps" ? (
              <Image src={Line} alt="bg" width={35} height={1} className="" />
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
          <div className="bg-azul w-44 h-36 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

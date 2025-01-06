import React from "react";
import Image from "next/image";
import iconPark from "../public/icon-park-solid_graphic-design.png";
import arrow from "../public/akar-icons_arrow-forward.png";
import shopping from "../public/fa_shopping-cart.png";
import folder from "../public/fluent_app-folder-48-filled.png";
import frame from "../public/Frame.png";

export default function Services() {
  return (
    <div
      className="bg-bg3  lg:flex lg:space-x-5  items-center py-20 space-y-10 px-12 xl:px-64"
      id="services"
    >
      <div className="lg:w-1/2 flex flex-col space-y-5">
        <p className="text-azul font-semibold  text-2xl">Services we offer</p>
        <p className="text-white font-semibold  text-4xl">
          We believe in true collaboration and therefore make our{" "}
          <span className="text-amarillo">clients</span> get value for their
          money. There are various areas in which we operate, here we present
          some of them:
        </p>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 lg:gap-8 ">
        <div className="rounded-lg bg-white cursor-pointer border-t-5 border-azul p-4 space-y-4">
          <Image
            src={iconPark}
            alt="Icon"
            width={24}
            height={24}
            className=" text-azul"
          />
          <p className="text-bg  font-bold text-lg">
            Web Design & Web Development
          </p>
          <div className="flex w-full justify-end items-center">
            <div className="bg-azul p-2 text-white rounded-md">
              <Image
                src={arrow}
                alt="Icon"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white cursor-pointer border-t-5 border-azul p-4 space-y-4">
          <Image
            src={shopping}
            alt="Icon"
            width={24}
            height={24}
            className=" text-azul"
          />
          <p className="text-bg  font-bold text-lg">E-commerce Solutions</p>
          <div className="flex w-full justify-end items-center">
            <div className="bg-azul p-2 text-white rounded-md">
              <Image
                src={arrow}
                alt="Icon"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white cursor-pointer border-t-5 border-azul p-4 space-y-4">
          <Image
            src={folder}
            alt="Icon"
            width={24}
            height={24}
            className=" text-azul"
          />
          <p className="text-bg  font-bold text-lg">
            Customized application development
          </p>
          <div className="flex w-full justify-end items-center">
            <div className="bg-azul p-2 text-white rounded-md">
              <Image
                src={arrow}
                alt="Icon"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white cursor-pointer border-t-5 border-azul p-4 space-y-4">
          <Image
            src={frame}
            alt="Icon"
            width={24}
            height={24}
            className=" text-azul"
          />
          <p className="text-bg  font-bold text-lg">
            Android & iOS App Development
          </p>
          <div className="flex w-full justify-end items-center">
            <div className="bg-azul p-2 text-white rounded-md">
              <Image
                src={arrow}
                alt="Icon"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

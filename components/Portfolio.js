import React, { useEffect, useState } from "react";
import Line from "@/public/Line.png";
import Image from "next/image";
import { getAppsApi, getWebsitesApi } from "@/supabase/Supabase";

export default function Portfolio() {
  const [active, setActive] = useState("websites");
  const [websites, setWebsites] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getWebsitesApi();
      setWebsites(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getAppsApi();
      setApps(response);
    })();
  }, []);
  return (
    <div
      className="bg-bg3 flex flex-col items-center py-20 space-y-10 px-12 xl:px-64"
      id="portfolio"
    >
      <div className="w-fit">
        <p className="text-azul text-4xl text-center  font-black px-2 mb-2">
          Our Portfolio
        </p>
        <div className="w-full h-1 rounded-lg bg-white" />
      </div>
      <div className="flex-col space-y-5 lg:flex lg:flex-row lg:space-x-5 xl:space-x-10">
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
        {active === "websites" && <Websites websites={websites} />}
        {active === "apps" && <Apps apps={apps} />}
      </div>
    </div>
  );
}

function Websites(props) {
  const { websites } = props;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 lg:pl-10">
      {websites?.map((website) => (
        <div className="  rounded-lg cursor-pointer hover:opacity-50 space-y-2 lg:space-y-5 ">
          <Image
            src={website?.image}
            width={320}
            height={150}
            alt="Image"
            className="rounded-lg "
          />
          <p className="text-white font-semibold text-center text-sm lg:text-lg">
            {website.name}
          </p>
        </div>
      ))}
    </div>
  );
}
function Apps(props) {
  const { apps } = props;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5 lg:pl-10">
      {apps?.map((app) => (
        <div className="  rounded-lg cursor-pointer hover:opacity-50 space-y-2 lg:space-y-5">
          <Image
            src={app?.image}
            width={320}
            height={150}
            alt="Image"
            className="rounded-lg "
          />
          <p className="text-white font-semibold text-center text-sm lg:text-lg">
            {app.name}
          </p>
        </div>
      ))}
    </div>
  );
}

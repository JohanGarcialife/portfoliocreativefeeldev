import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Link from "next/link";
import Rectangle54 from "../public/bg/Rectangle54.png";
import Rectangle56 from "../public/bg/Rectangle56.png";
import Rectangle59 from "../public/bg/Rectangle59.png";
import Rectangle60 from "../public/bg/Rectangle60.png";
import { Avatar, Button, Chip } from "@nextui-org/react";

import { getTechnologiesApi } from "@/supabase/Supabase";
import useWindowSize from "@/hooks/useWindowSize";

export default function HeroSection() {
  const [techArray, setTechArray] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    (async () => {
      const response = await getTechnologiesApi();
      setTechArray(response);
    })();
  }, []);

  return (
    <div className="relative bg-bg" id="home">
      {width >= 1024 ? (
        <>
          <Image
            src={Rectangle60}
            alt="Logo"
            width={634}
            height={634}
            className="absolute top-0 left-1/3 z-0 opacity-20"
          />
          <Image
            src={Rectangle59}
            alt="Logo"
            width={634}
            height={634}
            className="absolute top-0 left-20 z-0 opacity-20"
          />
          <Image
            src={Rectangle54}
            alt="Logo"
            width={634}
            height={634}
            className="absolute top-0 right-0 z-0 opacity-20"
          />
          <Image
            src={Rectangle56}
            alt="Logo"
            width={634}
            height={634}
            className="absolute bottom-0 right-0 z-0 opacity-20"
          />
        </>
      ) : null}
      <div className="relative z-10">
        <div className="px-20 py-10  md:min-h-screen flex flex-col justify-center items-center space-y-10">
          <Image src={Logo} alt="Logo" width={400} height={400} />
          <h1 className="text-2xl text-center font-bold text-white ">
            Innovation and creativity at your service
          </h1>
          {width >= 1024 ? (
            <div className="flex space-x-2  items-center justify-center flex-wrap xl:w-1/2">
              {techArray?.map((tech) => (
                <Chip
                  className="text-white font-semibold my-1"
                  color="danger"
                  variant="shadow"
                  avatar={<Avatar src={tech.logo} />}
                  size="lg"
                >
                  <p className="text-white font-semibold">{tech.name}</p>
                </Chip>
              ))}
            </div>
          ) : null}
          <Button
            as={Link}
            color="primary"
            href="#contact"
            variant="shadow"
            size="lg"
          >
            <p className="text-white font-semibold">Contact Us!</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

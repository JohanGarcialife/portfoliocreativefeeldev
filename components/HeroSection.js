import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Rectangle54 from "../public/bg/Rectangle54.png";
import Rectangle56 from "../public/bg/Rectangle56.png";
import Rectangle59 from "../public/bg/Rectangle59.png";
import Rectangle60 from "../public/bg/Rectangle60.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-bg">
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
      <div className="relative z-10">
        <div className="px-20 min-h-screen flex flex-col justify-center items-center space-y-10">
          <Image src={Logo} alt="Logo" width={400} height={400} />
          <h1 className="text-2xl font-bold text-white ">
            Innovation and creativity at your service
          </h1>
          <Button as={Link} color="primary" href="#" variant="shadow" size="lg">
            <p className="text-white font-semibold">Get Started</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

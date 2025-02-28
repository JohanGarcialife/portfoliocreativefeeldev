import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rectangle72 from "@/public/bg/Rectangle72.png";
import Rectangle73 from "@/public/bg/Rectangle73.png";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Avatar } from "@nextui-org/react";
import { getTestimonialsApi } from "@/supabase/Supabase";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTestimonialsApi();
      setTestimonials(response);
    })();
  }, []);
  return (
    <div
      className="relative bg-bg2 py-20 lg:px-64 overflow-hidden space-y-10 px-12 "
      id="testimonials"
    >
      <Image
        src={Rectangle72}
        alt="bg"
        width={634}
        height={634}
        className="absolute bottom-0 left-0 z-0 opacity-20"
      />
      <Image
        src={Rectangle73}
        alt="bg"
        width={634}
        height={634}
        className="absolute top-0 right-0 z-0 opacity-20"
      />
      <p className="text-azul text-4xl text-center  font-black">
        "Testimonials"
      </p>
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="w-full h-fit"
      >
        <Content testimonials={testimonials} />
      </ScrollShadow>
    </div>
  );
}

export const CameraIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

function Content(props) {
  const { testimonials } = props;
  return (
    <div className="flex space-x-10 justify-center items-center">
      {testimonials?.map((testimony) => (
        <div className="min-h-44 max-w-[450px] space-y-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 border-gray-100 p-5">
          <div className="flex space-x-3 items-center">
            <Avatar
              showFallback
              fallback={
                <CameraIcon
                  className="animate-pulse w-6 h-6 text-default-500"
                  fill="currentColor"
                  size={20}
                />
              }
              src={testimony.photo}
            />
            <div>
              <p className="text-white font-semibold">{testimony.name}</p>
              <p className="text-white font-semibold">{testimony.project}</p>
            </div>
          </div>

          <p className="text-white text-sm">{testimony.testimony}</p>
        </div>
      ))}
    </div>
  );
}

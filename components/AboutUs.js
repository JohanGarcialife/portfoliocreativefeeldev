import React from "react";
import Image from "next/image";
import ai from "../public/ai.png";
import projects from "../public/estadistica/projects.png";
import clients from "../public/estadistica/clients.png";
import experience from "../public/estadistica/experience.png";
import company from "../public/estadistica/company.png";

export default function AboutUs() {
  return (
    <div
      className="bg-bg2 flex flex-col items-center py-20 space-y-10 px-12 xl:px-64"
      id="aboutUs"
    >
      <div className=" max-w-[780px] ">
        <p className="text-white font-semibold text-center text-lg lg:text-4xl">
          Founded more than 5 years ago, Creative Feel Dev is one of the fastest
          growing <span className="text-amarillo">web</span> and{" "}
          <span className="text-amarillo">mobile application</span> development
          agencies in Venezuela.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center  space-y-10 md:space-x-10">
        <div className="flex flex-col space-y-5 md:w-1/2">
          <p className="text-gris">
            At Creative Feel Dev, we are a dedicated team of developers
            specializing in creating cutting-edge web and mobile applications.
            With a strong focus on technologies like React, React Native,
            Node.js, Express.js, MongoDB, SQL, NoSQL, Tailwind CSS, Bootstrap,
            Golang, and Expo, we deliver tailored solutions that meet the unique
            needs of our clients.
          </p>
          <p className="text-gris">
            Our mission is to transform your ideas into reality by leveraging
            the latest technologies and best practices in software development.
            Whether you need a responsive website, a robust mobile application,
            or a full-stack solution, we work closely with you to ensure that
            every project is executed with precision and creativity.
          </p>
          <p className="text-gris">
            What sets us apart is our commitment to quality, collaboration, and
            innovation. We believe in building long-term relationships with our
            clients, providing ongoing support and maintenance to ensure your
            digital products continue to thrive in a competitive landscape.
          </p>
          <p className="text-gris">
            Let us help you elevate your business with our expertise in modern
            development practices. Contact us today to discuss how we can bring
            your vision to life!
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src={ai} alt="Logo" width={525} height={300} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:flex items-center justify-between  w-full">
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image src={projects} alt="Logo" width={90} height={90} />
          <p className="text-white font-semibold text-2xl">Projects</p>
          <p className="text-white font-semibold">+25</p>
        </div>
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image src={clients} alt="Logo" width={80} height={80} />
          <p className="text-white font-semibold text-2xl">Clients</p>
          <p className="text-white font-semibold">+15</p>
        </div>
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image src={experience} alt="Logo" width={72} height={72} />
          <p className="text-white font-semibold text-2xl">Experience</p>
          <p className="text-white font-semibold">+5 years</p>
        </div>
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image src={company} alt="Logo" width={72} height={72} />
          <p className="text-white font-semibold text-2xl">Company</p>
          <p className="text-white font-semibold">+3</p>
        </div>
      </div>
    </div>
  );
}

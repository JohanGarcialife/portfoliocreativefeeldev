import React from "react";
import Image from "next/image";
import Rectangle61 from "../public/bg/Rectangle61.png";
import Rectangle62 from "../public/bg/Rectangle62.png";
import Brain from "../public/whyUs/Brain.png";
import Team from "../public/whyUs/Team.png";
import Clock from "../public/whyUs/Clock.png";
import Price from "../public/whyUs/Price.png";

export default function WhyChooseUs() {
  return (
    <div className="relative bg-bg  " id="whyChooseUs">
      <Image
        src={Rectangle61}
        alt="bg"
        width={634}
        height={634}
        className="absolute top-0 left-0 z-0 opacity-20"
      />
      <Image
        src={Rectangle62}
        alt="bg"
        width={634}
        height={634}
        className="absolute bottom-20 right-40 z-0 opacity-20"
      />
      <div className="relative z-10">
        <div className=" flex flex-col items-center py-20 space-y-5 lg:space-y-10 px-12 ">
          <div className="flex flex-col items-center justify-center space-y-4 w-full">
            <p className="text-azul text-2xl text-center font-bold">
              Why Choose Us
            </p>
            <p className="text-white text-4xl text-center font-black">
              For your web development needs?
            </p>
            <p className="text-gris  text-center ">
              We have passion and love for what we do & we don’t believe in
              cutting corners and setting wrong expectations. We aim at
              improving with each passing day and showcase what we actually are
              in reality, and we do not pretend in any circumstances. There are
              multiple reasons that will make you fall for us for availing
              top-notch web development services. Here are a few of them
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:space-x-2 xl:space-x-10 flex-wrap">
            <div className="bg-white min-h-96 max-w-80 rounded-xl p-5 flex flex-col items-center space-y-4 ">
              <Image src={Brain} alt="bg" width={50} height={50} className="" />
              <p className="text-bg2 text-2xl font-bold ">Experience</p>
              <p className="text-gray-600 text-sm  ">
                Experience counts is a common saying, and hiring us means hiring
                professionals who have years of experience to add on to their
                kitty to get your projects falling at the right place. Also, we
                have a streamlined project management system to cater to your
                project requisites. Getting connected with us allows you to
                browse over a large talent pool who can get your task
                accomplished within fixed deadlines.
              </p>
            </div>
            <div className="bg-white min-h-96 max-w-80 rounded-xl p-5 flex flex-col items-center space-y-4 ">
              <Image src={Team} alt="bg" width={50} height={50} className="" />
              <p className="text-bg2 text-2xl font-bold ">Dedicated team</p>
              <p className="text-gray-600 text-sm  ">
                Everyone has their own cup of tea to drink, and thus we do not
                mix up the different areas of functionality. We have dedicated
                teams for designing and graphics. While our web developers get
                the deigning part done, we have our own graphic designing team
                that handles all the quality imagery part for a successful
                website.
              </p>
            </div>
            <div className="bg-white min-h-96 max-w-80 rounded-xl p-5 flex flex-col items-center space-y-4 ">
              <Image src={Clock} alt="bg" width={50} height={50} className="" />
              <p className="text-bg2 text-2xl font-bold">
                Rapid turnaround time
              </p>
              <p className="text-gray-600 text-sm">
                We aim at delivering quality work within fixed deadlines and
                thus are committed to delivering solutions when our clients need
                them without making them wait for it and extend beyond the fixed
                time frame. We chalk out our plans accordingly and also
                regularly update our clients regarding the progress to get what
                you desire. We give ears to your vision
              </p>
            </div>
            {/* <div className="bg-white min-h-96 max-w-80 rounded-xl p-5 flex flex-col items-center space-y-4 ">
              <Image src={Price} alt="bg" width={50} height={50} className="" />
              <p className="text-bg2 text-2xl font-bold ">
                Competitive pricing
              </p>
              <p className="text-gray-600 text-sm  ">
                Pricing is one crucial factor that every business owner
                considers while hiring a web development company. We are the
                best in the market and offer competitive pricing to our clients
                meeting all the demands of the clients with higher levels of
                efficiency.
              </p>
            </div> */}
          </div>
          <div className="flex items-center justify-center space-x-10"></div>
        </div>
      </div>
    </div>
  );
}

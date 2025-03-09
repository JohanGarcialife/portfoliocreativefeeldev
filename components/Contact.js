import React from "react";
import Image from "next/image";
import ContactImage from "@/public/Group81.png";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, Textarea } from "@nextui-org/react";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cltzy1a", "template_p8sj3lh", e.target, {
        publicKey: "user_14rWsW2mQBa3ZWDE9MC4N",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div
      className="py-20 bg-bg px-12 xl:px-64 flex flex-col lg:flex-row items-center lg:space-x-5 space-y-5 "
      id="contact"
    >
      <div className="flex justify-center lg:w-1/2">
        <Image src={ContactImage} alt="Logo" width={505} height={575} />
      </div>
      <div className=" flex justify-center lg:w-1/2 ">
        <div className="flex flex-col space-y-5 bg-white p-10 rounded-xl  w-fit">
          <p className="font-extrabold text-4xl text-azul">Contact us!</p>

          <p className="text-gris3 w-full max-w-md">
            Use the form below to contact us. Please be as detailed and precise
            as possible. Include your industry and any specific requests. To
            help us get to know and serve you better, we thank you for first
            giving us a good description of who you are. You can also send an
            email, call us or send us a WhatsApp to make an appointment.
          </p>
          <Form
            className="w-full max-w-md space-y-5"
            validationBehavior="native"
            onSubmit={sendEmail}
          >
            <Input
              isRequired
              label="Name"
              labelPlacement="outside"
              name="Name"
              placeholder="Enter your name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters long";
                }

                return value === "admin" ? "Nice try!" : null;
              }}
              classNames={{
                label: " font-bold",
              }}
            />
            <Input
              label="Company"
              labelPlacement="outside"
              name="Company"
              placeholder="Enter your company name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Company name must be at least 3 characters long";
                }

                return value === "admin" ? "Nice try!" : null;
              }}
              classNames={{
                label: "font-bold",
              }}
            />
            <Input
              isRequired
              label="Email address"
              labelPlacement="outside"
              name="Email"
              placeholder="Enter your Email address"
              type="email"
              validate={(value) => {
                if (value.length < 3) {
                  return "Invalid email address";
                }
                return value === "admin" ? "Nice try!" : null;
              }}
              classNames={{
                label: " font-bold",
              }}
            />

            <Textarea
              isRequired
              name="Message"
              className="w-full max-w-md"
              label="Message"
              labelPlacement="outside"
              placeholder="Your message here"
              validate={(value) => {
                if (value.length < 3) {
                  return "Please send a message with at least 3 characters";
                }
                return value === "admin" ? "Nice try!" : null;
              }}
              classNames={{
                label: " font-bold",
              }}
            />

            <Button type="submit" color="primary" variant="shadow">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

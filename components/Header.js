import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Logo from "../public/Logo.png";
import Image from "next/image";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import useAuth from "@/hooks/useAuth";




export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalForm, setModalForm] = useState(null);
  const { auth, logout } = useAuth();

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#aboutUs" },
    { name: "Services", link: "#services" },
    { name: "Why Choose Us", link: "#whyChooseUs" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const openModalSignUp = () => {
    setModalForm("signUp");
    onOpen();
  };
  const openModalSignIn = () => {
    setModalForm("signIn");
    onOpen();
  };

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={true}
        className="bg-transparent z-50"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#home">
              <p className="text-white font-semibold">Home</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#aboutUs">
              <p className="text-white font-semibold">About us</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#services">
              <p className="text-white font-semibold">Services</p>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#whyChooseUs">
              <p className="text-white font-semibold">Why Choose Us</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#portfolio">
              <p className="text-white font-semibold">Portfolio</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#testimonials">
              <p className="text-white font-semibold">Testimonials</p>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#contact">
              <p className="text-white font-semibold">Contact</p>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {auth? <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" variant="light" onPress={logout}>
              <p className="text-white font-semibold ">Log out</p>
            </Button>
          </NavbarItem>
        </NavbarContent> : 
        
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" variant="light" onPress={openModalSignIn}>
              <p className="text-white font-semibold ">Login</p>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="shadow" onPress={openModalSignUp}>
              <p className="text-white font-semibold ">Sign Up</p>
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        }


        {/* Menu móvil */}
        <NavbarMenu className="flex-col items-center justify-center space-y-5">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.link}
                size="lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <p className="text-azul text-4xl font-bold">{item.name}</p>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        classNames={{
          base: " bg-bg  text-white",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {modalForm === "signUp" && (
                <ModalHeader className="flex flex-col gap-1">
                  Sign up
                </ModalHeader>
              )}
              {modalForm === "signIn" && (
                <ModalHeader className="flex flex-col gap-1">
                  Sign in
                </ModalHeader>
              )}
              <ModalBody>
                {modalForm === "signUp" ? (
                  <SignUp onClose={onClose} setModalForm={setModalForm} />
                ) : null}
                {modalForm === "signIn" ? (
                  <SignIn onClose={onClose} setModalForm={setModalForm} />
                ) : null}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

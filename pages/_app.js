import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

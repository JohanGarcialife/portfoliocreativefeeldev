import react, { useMemo, useState, useEffect } from "react";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Nunito } from "next/font/google";
import AuthContext from "@/context/authContext";
import {
  setToken,
  getToken,
  removeToken,
  getTokenGoole,
} from "../components/token";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});
export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    const google = getTokenGoole();

    if (token || google) {
      setAuth({
        google,
        token,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      window.location = "/";
    }
  };

  const userData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={userData}>
      <NextUIProvider>
        <main className={`${nunito.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </AuthContext.Provider>
  );
}

import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app"; // Import the AppProps type
import NavMenu from "@/components/NavMenu";
import '../styles/globals.css'


function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps; // Destructure session and restPageProps

  return (
    <SessionProvider session={session}>
      <NavMenu />
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default App;

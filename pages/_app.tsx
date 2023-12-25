import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import "../assets/styles/modules/globals.css"
import Loading from "./Loading";
export default function App({ Component, pageProps }: AppProps) {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="">
        {showLoading && <Loading />}
      </div>


      <Component {...pageProps} />
   

    </>


  )
}
import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import "../assets/styles/modules/globals.css"
import Loading from "./Loading";
import Navbar from '../layouts/Navbar';
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
      <div className="flex items-center justify-center relative top-52">
        {showLoading && <Loading />}
      </div>


      <Component {...pageProps} />
      <Navbar />

    </>


  )
}
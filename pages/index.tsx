import Head from "next/head";
import React from 'react'
import Header from "../components/Header";
import Navbar from "../layouts/Navbar";
import Slider from "../components/Slider"
const Home = () => {
    return (
        <>
            <Head>
                <title>home</title>
                <meta name="description" content="home" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" className="rounded-full" href="/images/favicon.png" />	            </Head>
            <main>
            <Navbar />
            <Header/>
            <Slider/>
            </main>
        </>
    );
};


export default Home;
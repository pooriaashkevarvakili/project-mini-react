import Head from "next/head";
import React from 'react'
import Navbar from "../../app/Navbar";

const About = () => {
    return (
        <>
            <Head>
                <title>about</title>
                <meta name="description" content="about" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />	            </Head>
            <main>
                <Navbar />
            </main>
        </>
    );
};


export default About;
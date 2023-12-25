import Head from "next/head";
import React from 'react'
import Navbar from "../../layouts/Navbar";

const Doctor = () => {
    return (
        <>
            <Head>
                <title>doctor</title>
                <meta name="description" content="doctor" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" className="rounded-full" href="/images/meshki.ico" />	            </Head>
            <main>
                <Navbar />
            </main>
        </>
    );
};


export default Doctor;
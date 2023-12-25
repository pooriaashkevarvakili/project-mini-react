import Head from "next/head";
import React from 'react'
import Navbar from "../../app/Navbar";

const Contact = () => {
    return (
        <>
            <Head>
                <title>contact</title>
                <meta name="description" content="contact" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />	            </Head>
            <main>
                <Navbar />
            </main>
        </>
    );
};


export default Contact;
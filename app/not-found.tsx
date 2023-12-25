import Link from "next/link"
import "../assets/styles/modules/globals.scss"

import "../assets/styles/modules/css/style.css"
export default function Custom404() {
    return (
        <div className="flex items-center  justify-center w-full h-screen">
            <section className="error-page section">
                <div className="container">
                    <div className="flex">
                        <div className="w-10/12  ">

                            <div className="error-inner">
                                <h1>404<span>Oop's  sorry we can't find that page!</span></h1>

                                <Link className="pl-52 flex items-center justify-center relative top-4  h-20 bg-blue-400 text-white rounded-xl " href="/">
                                    <span className="relative right-24">Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
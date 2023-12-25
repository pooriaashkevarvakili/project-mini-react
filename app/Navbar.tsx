import Link from "next/link";
import React from 'react'

import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
export default function Navbar() {
    return (

        <div className="flex px-16  justify-between">

            <div className="p-3">
                <ul className="flex space-x-3">
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/Doctor">doctor</Link>
                    </li>
                    <li>
                        <Link href="/Contact">contact</Link>
                    </li>
                    <li>
                        <Link href="/Faq">FaQ</Link>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                <div className="flex space-x-4  ">

                    <div className="flex space-x-2  items-center">
                        <CiPhone className="text-blue-400 text-2xl" />
                        <span>0080123456789</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <MdOutlineMail className="relative top-1 text-2xl text-blue-400" />
                        <span>
                            pooriavakili09@gmail.com
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
import Link from "next/link"
import "../assets/styles/modules/globals.scss"

export default function Custom404() {
    return (
        <div className="flex w-full items-center justify-center h-screen">
            <Link className="p-3 rounded-xl bg-black text-white" href="/">home</Link>

        </div>)
}
import type { AppProps } from 'next/app'
import "../globals.css"
export default function App({ Component, pageProps }: AppProps) {
      ///@ts-ignore
  return <Component {...pageProps} />
}
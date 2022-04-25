import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {mock} from 'mockjs'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

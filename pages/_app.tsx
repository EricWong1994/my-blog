import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {mock} from 'mockjs'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp

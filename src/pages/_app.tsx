import Footer from '@/modules/common/footer'
import NavBar from '@/modules/common/navBar'
import SideBar from '@/modules/common/sideBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Jay Log Blog`}</title>
        <meta name='description' content='Jay Log Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='block w-full h-full'>
        <NavBar />
        <div className='flex flex-row'>
          <SideBar />
          <div className='flex flex-col items-center justify-center w-screen h-screen text-black bg-gray-100 border-4 border-r-0 border-opacity-25 border-primary-color'>
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

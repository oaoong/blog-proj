import { DarkModeButton } from '@/modules/common/darkMode'
import Footer from '@/modules/common/footer'
import NavBar from '@/modules/common/navBar'
import SideBar from '@/modules/common/sideBar'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
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
      <ThemeProvider attribute='data-theme'>
        <div className='block w-full h-full bg-background-color'>
          <NavBar />
          <div className='flex flex-row pt-24 mobile:flex-col'>
            <SideBar />
            <div className='flex flex-col items-center justify-center w-screen h-screen text-primary-color bg-background-color '>
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
        <DarkModeButton />
      </ThemeProvider>
    </>
  )
}

import { DarkModeButton } from '@/modules/common/darkMode'
import Footer from '@/modules/common/footer'
import NavBar from '@/modules/common/navBar'
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
        <div className='block w-full h-full min-h-screen bg-background-color'>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
        <DarkModeButton />
      </ThemeProvider>
    </>
  )
}

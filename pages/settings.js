import Head from 'next/head'
import { HomeIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/outline'
import { ChartBarIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Home() {
  
  const [enabled, setEnabled] = useState(false) 
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setEnabled(true)
    } else {
      document.documentElement.classList.remove('dark')
      setEnabled(false)
    }
  }, [enabled])

  
  

  return (
    <div className="flex flex-col py-2 dark:bg-sexy min-h-screen">
      <Head>
        <title>Anime Workout Program</title>
        <meta charset='utf-8' />
        <script data-ad-client="ca-pub-7404737595748283" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />

        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#66f"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JNYXCDJ3TQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JNYXCDJ3TQ');
</script>
      </Head>

      <main className="flex flex-col w-full p-5">


        <h1 className="font-semibold text-3xl text-gray-800 dark:text-gray-50">Settings</h1>
        <div className="flex rounded shadow w-full h-full bg-center bg-cover p-5 mb-5 justify-between items-center">
          <h1 className="font-semibold text-2xl text-gray-800 my-3 dark:text-gray-50">Dark Mode</h1>
          <Switch
            checked={enabled}
            onChange={() => {localStorage.theme = enabled?'light':'dark'; setEnabled(!enabled)}}
            className={`${
              enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`transform transition ease-in-out duration-200
              ${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>

        </div>

        <div className="flex rounded shadow w-full h-full bg-center mt-10 bg-red-600 bg-cover p-5 mb-5 justify-center items-center" onClick={() => (typeof window !== undefined)?localStorage.clear():null}>
          <h1 className="font-semibold text-2xl text-white my-1">Reset Progress</h1>
        </div>
        
        <p className="text-lg dark:text-white mt-10 mx-5">Hey, it's Mr.Developer here. Some of you might be mad at me for adding such horrific ads to the app but please hear me out.</p>
        <p className="dark:text-white mx-5">Until i get accepted by adsense these ads will have to pass. In order to keep the app file size low (below 3MB) modern technology was used and that technology comes at a price. If the ads really bother you please contact me (email can be found on app download page) and I'll see what i can do to help you out (and remove your ads 😉)</p>


        <div className="h-20 w-full"></div>
      </main>

      <footer className="fixed bottom-0 flex items-center justify-center w-full border-t dark:border-black bg-white dark:bg-sexy">
        <Link href="/">
          <div className="flex-1 flex justify-center">
            <HomeIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-100" />
          </div>
        </Link>
        <Link href="/fire">
          <div className="flex-1 flex justify-center">
            <FireIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-100" />
          </div>
        </Link>
        <Link href="/chart">
          <div className="flex-1 flex justify-center">
            <ChartBarIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-100" />
          </div>
        </Link>

          <div className="flex-1 flex justify-center">
            <CogIcon className="h-8 w-8 text-gray-900 my-5 dark:text-sexy" />
          </div>

      </footer>
    </div>
  )
}

import Head from 'next/head'
import { HomeIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/outline'
import { ChartBarIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect } from 'react'
import AdSense from 'react-adsense';

export default function Home() {
  if (typeof window !== "undefined") {
    var count = (localStorage.getItem("count") == undefined) ? 0 : parseInt(localStorage.getItem("count"));
    var ex = (localStorage.getItem("ex") == undefined) ? 0 : parseInt(localStorage.getItem("ex"));
    var pushups = (localStorage.getItem("pushups") == undefined) ? 0 : parseInt(localStorage.getItem("pushups"));
    var situps = (localStorage.getItem("situps") == undefined) ? 0 : parseInt(localStorage.getItem("situps"));
    var squats = (localStorage.getItem("squats") == undefined) ? 0 : parseInt(localStorage.getItem("squats"));
    
  }
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])


  return (
    <div className="flex flex-col items-center justify-center py-2 dark:bg-sexy">
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
<script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNYXCDJ3TQ', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
 </Head>

      <main className="flex flex-col w-full p-5">

        <h1 className="font-semibold text-3xl text-gray-800 dark:text-gray-50">Stats</h1>
        <h1 className="font-light text-xl text-gray-800 mb-3 dark:text-gray-50">Check out your sick gains 💪 right here!</h1>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/saiki.png"})`}}>
          <p className="text-white text-xs">Ascension Progress</p>
          <h1 className="font-semibold text-2xl text-white my-3 mt-1">{parseInt(count)+parseInt(ex)+parseInt(pushups)+parseInt(situps)+parseInt(squats)}<span className="opacity-50">/<span className="text-lg">100,000</span></span></h1>
        </div>

        <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap mb-5">
          <div className="w-32 h-32 inline-block m-2 ml-0 bg-center bg-cover rounded shadow dark:bg-layer" style={{backgroundImage: `url(${""})`}}>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">{count}</p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-50">sessions</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow dark:bg-layer" style={{backgroundImage: `url(${"/images/.gif"})`}}>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">{ex}</p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-50">Exercises</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow dark:bg-layer" style={{backgroundImage: `url(${"/images/.gif"})`}}>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">{pushups}</p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-50">push ups</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow dark:bg-layer" style={{backgroundImage: `url(${"/images/.gif"})`}}>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">{situps}</p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-50">sit ups</p>            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 mr-0 bg-center bg-cover rounded shadow dark:bg-layer" style={{backgroundImage: `url(${"/images/.gif"})`}}>
            <div className="w-full h-full flex justify-center items-center flex-col">
              <p className="font-semibold text-3xl text-gray-900 dark:text-gray-50">{squats}</p>
              <p className="font-semibold text-sm text-gray-900 dark:text-gray-50">squats</p>            </div>
          </div>
        </div>
        <AdSense.Google
          client='ca-pub-7404737595748283'
          slot='8781015757'
          style={{ display: 'block' }}
          layout='in-article'
          format='fluid'
        />
        <h1 className="font-semibold text-2xl text-center my-3 text-gray-800 dark:text-gray-50">Achievements</h1>
        <div className="p-5">
          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-6 p-5 mb-5" style={{backgroundImage: `url(${"/covers/s2.png"})`}}>
            <h1 className="font-semibold text-2xl text-white my-1">The First Mission</h1>
            <p className="text-white text-xs">Download the app</p>
          </div>

          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover mb-5" style={{backgroundImage: `url(${"/covers/s3.png"})`}}>
            <div className="pt-6 p-5  rounded opacity-75 bg-center bg-cover"  style={{backgroundImage: `url(${(parseInt(squats)<9999)?"/covers/lock.png":""})`}}>
              <h1 className="font-semibold text-2xl text-white my-1">Squat Master</h1>
              <p className="text-white text-xs">Do 10,000 squats</p>
            </div>
          </div>

          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover mb-5" style={{backgroundImage: `url(${"/covers/s4.jpg"})`}}>
            <div className="pt-6 p-5  rounded opacity-75 bg-center bg-cover"  style={{backgroundImage: `url(${(parseInt(pushups)<9999)?"/covers/lock.png":""})`}}>
              <h1 className="font-semibold text-2xl text-white my-1">Push Up King</h1>
              <p className="text-white text-xs">Do 10,000 push ups</p>
            </div>
          </div>

          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover mb-5" style={{backgroundImage: `url(${"/covers/s1.png"})`}}>
            <div className="pt-6 p-5  rounded opacity-75 bg-center bg-cover"  style={{backgroundImage: `url(${(parseInt(count)<99)?"/covers/lock.png":""})`}}>
              <h1 className="font-semibold text-2xl text-white my-1">Workout Machine</h1>
              <p className="text-white text-xs">Complete 100 Workouts</p>
            </div>
          </div>

          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover mb-5">
            <div className="pt-6 p-5  rounded bg-center bg-cover"  style={{backgroundImage: `url(${"/covers/lock.png"})`}}>
              <h1 className="font-semibold text-2xl text-white my-1">Locked</h1>
              <p className="text-white text-xs">Coming soon</p>
            </div>
          </div>

          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover mb-5">
            <div className="pt-6 p-5  rounded bg-center bg-cover"  style={{backgroundImage: `url(${"/covers/lock.png"})`}}>
              <h1 className="font-semibold text-2xl text-white my-1">Locked</h1>
              <p className="text-white text-xs">Coming soon</p>
            </div>
          </div>

        </div>
        


      




        <div className="h-20 w-full"></div>
      </main>

      <footer className="fixed bottom-0 flex items-center justify-center w-full border-t bg-white dark:bg-sexy dark:border-black">
        <Link href="/mobile">
          <div className="flex-1 flex justify-center">
            <HomeIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
        <Link  href="/fire">
          <div className="flex-1 flex justify-center">
            <FireIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
        <div className="flex-1 flex justify-center">
          <ChartBarIcon className="h-8 w-8 text-gray-900 my-5 dark:text-sexy" />
        </div>
        <Link href="/settings">
          <div className="flex-1 flex justify-center">
            <CogIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
      </footer>
    </div>
  )
}

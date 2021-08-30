import Head from 'next/head'
import { HomeIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/outline'
import { ChartBarIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect } from 'react'
import jsondata from "./data.json"
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState("noone");

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])


  let workouts = jsondata.characters[data].workout;
  let wrows = [];
  for (let i = 0; i < workouts.length; i++){
    wrows.push(
      <div className="w-24 inline-block m-2 bg-center bg-cover ">
      <div className="w-24 h-24 inline-block bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/images/"+workouts[i][0].replace(/\s/g, '').toLowerCase()+".gif"})`}}>
        <div className="w-full h-full flex p-2">
          
        </div>
      </div>
      <p className="text-center dark:text-gray-50" >{ workouts[i][1] + " " +  workouts[i][2]}</p>
      </div>
    );
  }
  useEffect(() => {
    if(data == "noone") {
      document.getElementById("overlay").style.display = "none";
    }else {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("img").style.backgroundImage = "url('"+jsondata.characters[data].img+"')";
      document.getElementById("name").innerText = jsondata.characters[data].name;
    }
    console.log(data);
  }, [data])



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
      </Head>






      <div id="overlay" className="fixed top-0 p-5 h-full w-full bg-lightopacity dark:bg-darkopacity">
        <div className="flex w-full flex-col justify-center h-full" >
          <div className="flex-1 w-full" onClick={() => setData("noone")}></div>
          <div className="bg-cover bg-center w-full p-3 bg-white dark:bg-sexy rounded shadow-xl">
            <div className="flex items-center">
            <div id="img" className="flex bg-center bg-cover w-32 h-24 m-3 rounded"></div>
            <h1 id="name" className="font-semibold text-2xl text-gray-900 dark:text-white my-3"></h1>
            </div>
            
            <p className="font-semibold text-xl text-gray-900 dark:text-gray-50 my-3">Routine</p>
            <div id="workouts" className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap">
              {wrows}
            </div>
            <div id="button" className="m-5 rounded p-2 bg-white shadow" onClick={() => router.push('/workout/'+data)}>
              <p className="text-center font-semibold text-lg">Begin</p>
            </div>
          </div>
          <div className="flex-1 w-full" onClick={() => setData("noone")}></div>
        </div>
      </div>









      <main className="flex flex-col w-full p-5">


        <h1 className="font-semibold text-xl text-gray-900 my-3 dark:text-gray-50">Beginner</h1>

        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/onepunch.png"})`}} onClick={() => setData("onepunch")}>
          <h1 className="font-semibold text-2xl text-white my-3">One Punch Man</h1>
        </div>

        <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap mb-5">
          <div className="w-32 h-32 inline-block m-2 ml-0 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/bleach.jpg"})`}} onClick={()=>setData("bleach")} >
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Bleach</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/aot.png"})`}} onClick={()=>setData("aot")} >
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">AOT</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/goku.png"})`}} onClick={()=>setData("goku")} >
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Goku</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 mr-0 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/mikasa.png"})`}} onClick={()=>setData("mikasa")} >
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Mikasa</p>
            </div>
          </div>
        </div>

        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Amateur</h1>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/demonslayer.png"})`}} onClick={()=>setData("demonslayer")} >
          <h1 className="font-semibold text-2xl text-white my-3">Demon Slayer</h1>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5 mr-2" style={{backgroundImage: `url(${"/covers/ippo.jpg"})`}} onClick={()=>setData("ippo")} >
            <h1 className="font-semibold text-2xl text-white my-3">Ippo</h1>
          </div>
          <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5 ml-2" style={{backgroundImage: `url(${"/covers/onepiece.png"})`}} onClick={()=>setData("onepiece")} >
            <h1 className="font-semibold text-2xl text-white my-3">OnePiece</h1>
          </div>
        </div>

        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/saiki.png"})`}} onClick={()=>setData("saiki")} >
          <h1 className="font-semibold text-2xl text-white my-3">Saiki Kuso</h1>
        </div>
        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Advanced</h1>
        
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/hunter.png"})`}} onClick={()=>setData("hunter")} >
          <h1 className="font-semibold text-2xl text-white my-3">Hunter x Hunter</h1>
        </div>
      
     
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/jojo.png"})`}} onClick={()=>setData("jojo")} >
          <h1 className="font-semibold text-2xl text-white my-3">Jojo's Bizzare Workout</h1>
        </div>

        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Elite</h1>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5 mb-5" style={{backgroundImage: `url(${"/covers/baki.jpg"})`}} onClick={()=>setData("baki")} >
          <h1 className="font-semibold text-2xl text-white my-3 mr-20">Baki The Grappler</h1>
          <p className="text-white">Train like a true professional Mix Martial Artist.</p>
        </div>

        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5" style={{backgroundImage: `url(${"/covers/asta.jpg"})`}} onClick={()=>setData("asta")} >
          <h1 className="font-semibold text-2xl text-white my-3 mr-20">Asta</h1>
          <p className="text-white">Take on the impossible Asta challenge. Attempt to complete 200 pushups, situps and squats.</p>
        </div>

      




        <div className="h-20 w-full"></div>
      </main>

      <footer className="fixed bottom-0 flex items-center justify-center w-full border-t bg-white dark:bg-sexy dark:border-black">
        <Link href="/">
          <div className="flex-1 flex justify-center">
            <HomeIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
        <div className="flex-1 flex justify-center">
          <FireIcon className="h-8 w-8 text-gray-900 my-5 dark:text-sexy" />
        </div>
        <Link href="/chart">
          <div className="flex-1 flex justify-center">
            <ChartBarIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
        <Link href="/settings">
          <div className="flex-1 flex justify-center">
            <CogIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
      </footer>
    </div>
  )
}

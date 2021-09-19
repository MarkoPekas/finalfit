import Head from 'next/head'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/outline'
import { FireIcon } from '@heroicons/react/outline'
import { ChartBarIcon } from '@heroicons/react/outline'
import { CogIcon } from '@heroicons/react/outline'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import jsondata from "./data.json"
import { useRouter } from 'next/router'
import { register, unregister } from 'next-offline/runtime';



export default function Home() {

  const [data, setData] = useState("noone");
  const router = useRouter()
  useEffect(()=> {
    register('/service-worker.js', {scope: '/'}) 
    return () => {
        unregister();  
    };
  }, [])
  useEffect(() => {
    if(localStorage.theme == undefined) {
      localStorage.theme = 'light'
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  function adClick(){
    window.open("//benoopto.com/4/4527203")
  }

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
        <meta name="propeller" content="ef25037abe9cb22da116e5fe63813b98" />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <script async="async" data-cfasync="false" src="//upgulpinon.com/1?z=4526960"></script>
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




      <main className="flex flex-col w-full p-5 dark:p-20">

        <h1 className="font-semibold text-3xl text-gray-900 mb-3 dark:text-gray-50">Anime Workout Program</h1>

        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5" style={{backgroundImage: `url(${"/covers/onepunch.png"})`}} onClick={()=>setData("onepunch")} >
          <h1 className="font-semibold text-2xl text-white my-3 mr-20">The OnePunchMan Workout</h1>
          <p className="text-white">Work out like one punch man, the strongest man alive!</p>
        </div>

        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">My Hero Academia</h1>

        <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap">

          <div className="w-80 h-64 inline-block">
            <div className="h-full w-full flex-col flex">
              <div className="flex-1 flex p-2" onClick={()=>setData("deku")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/deku.png"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Deku Workout</p>
                  <p className="text-gray-500">15 min • Beginner</p>
                </div>
              </div>
              <div className="flex-1 flex p-2" onClick={()=>setData("todoroki")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/todoroki.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Todoroki Workout</p>
                  <p className="text-gray-500">20 min • Elite</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-64 inline-block">
            <div className="h-full w-full flex-col flex">
              <div className="flex-1 flex p-2" onClick={()=>setData("bakugo")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/bakugo.png"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Bakugo Workout</p>
                  <p className="text-gray-500">25 min • Advanced</p>
                </div>
              </div>
              <div className="flex-1 flex p-2" onClick={()=>setData("ochako")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/ochako.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Ochako Workout</p>
                  <p className="text-gray-500">10 min • Beginner</p>
                </div>
              </div>
            </div>
          </div>


        </div>



        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">The Seven Deadly Sins</h1>
        <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap">
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("wrath")}  style={{backgroundImage: `url(${"/covers/wrath.jpg"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Wrath</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("greed")}  style={{backgroundImage: `url(${"/covers/greed.jpg"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Greed</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("envy")}  style={{backgroundImage: `url(${"/covers/envy.png"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Envy</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("sloth")}  style={{backgroundImage: `url(${"/covers/sloth.png"})`}}>
          <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Sloth</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("lust")}  style={{backgroundImage: `url(${"/covers/lust.jpg"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Lust</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("gluttony")}  style={{backgroundImage: `url(${"/covers/gluttony.jpg"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Gluttony</p>
            </div>
          </div>
          <div className="w-32 h-32 inline-block m-2 bg-center bg-cover rounded shadow" onClick={()=>setData("pride")}  style={{backgroundImage: `url(${"/covers/pride.png"})`}}>
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semibold text-lg text-white">Pride</p>
            </div>
          </div>
        </div>

        
        <div className="w-80 h-32 mt-10 inline-block">
          <div className="h-full w-full flex-col flex">
            <div className="flex-1 flex p-2" onClick={()=>adClick()} >
              <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"https://images.hdqwalls.com/wallpapers/anime-original-minimalism-p5.jpg"})`}}></div>
              <div className="flex flex-col justify-center pl-5">
                <p className="font-semibold text-lg dark:text-gray-50">Try This Cool Game</p>
                <p className="text-gray-500">Sponsored 😉</p>
              </div>
            </div>
          </div>
        </div>



        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Popular</h1>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5" onClick={()=>setData("deku")}  style={{backgroundImage: `url(${"/covers/deku.png"})`}}>
          <h1 className="font-semibold text-2xl text-white my-3">One For All</h1>
        </div>
        <br></br>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5" onClick={()=>setData("demonslayer")}  style={{backgroundImage: `url(${"/covers/demonslayer.png"})`}}>
          <h1 className="font-semibold text-2xl text-white my-3">Demon Slayer</h1>
        </div>
        <br></br>
        <div className="flex flex-col rounded shadow w-full h-full bg-center bg-cover pt-10 p-5" onClick={()=>setData("goku")}  style={{backgroundImage: `url(${"/covers/goku.png"})`}}>
          <h1 className="font-semibold text-2xl text-white my-3">Super Saiyan</h1>
        </div>
        





        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Naruto</h1>
        <div className="w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap">

          <div className="w-80 h-64 inline-block">
            <div className="h-full w-full flex-col flex">
              <div className="flex-1 flex p-2" onClick={() => setData("naruto")}>
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/naruto.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Naruto Workout</p>
                  <p className="text-gray-500">15 min • Advanced</p>
                </div>
              </div>
              <div className="flex-1 flex p-2" onClick={()=>setData("sakura")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/sakura.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Sakura Workout</p>
                  <p className="text-gray-500">10 min • Amateur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-64 inline-block">
            <div className="h-full w-full flex-col flex">
              <div className="flex-1 flex p-2" onClick={()=>setData("sasuke")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/sasuke.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Sasuke Workout</p>
                  <p className="text-gray-500">7 min • Advanced</p>
                </div>
              </div>
              <div className="flex-1 flex p-2" onClick={()=>setData("kakashi")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/kakashi.jpg"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Kakashi Workout</p>
                  <p className="text-gray-500">10 min • Beginner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 h-64 inline-block">
            <div className="h-full w-full flex-col flex">
              <div className="flex-1 flex p-2" onClick={()=>setData("rocklee")} >
                <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/covers/rocklee.png"})`}}></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg dark:text-gray-50">Rock Lee Workout</p>
                  <p className="text-gray-500">10 min • Beginner</p>
                </div>
              </div>
              <div className="flex-1 flex p-2">
                <div className="h-full w-28 bg-center bg-cover rounded"></div>
                <div className="flex flex-col justify-center pl-5">
                  <p className="font-semibold text-lg"></p>
                  <p className="text-gray-500"></p>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="w-80 h-32 mt-10 inline-block">
          <div className="h-full w-full flex-col flex">
            <div className="flex-1 flex p-2" onClick={()=>adClick()} >
              <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"https://wallpapercave.com/wp/wp5165681.jpg"})`}}></div>
              <div className="flex flex-col justify-center pl-5">
                <p className="font-semibold text-lg dark:text-gray-50">This Game is Insane</p>
                <p className="text-gray-500">Sponsored 😲</p>
              </div>
            </div>
          </div>
        </div>


        <h1 className="font-semibold text-xl text-gray-900 my-3 mt-10 dark:text-gray-50">Haikyuu!!</h1>
        <div className="w-full flex h-32">
          <div className="flex-1 p-2 flex" onClick={()=>setData("hinata")} >
            <div className="h-full flex-1 bg-center bg-cover rounded text-center flex justify-center items-center shadow" style={{backgroundImage: `url(${"/covers/hinata.webp"})`}}>
            <p className="font-semibold text-lg text-white my-auto">Hinata</p>
            </div>
          </div>
          <div className="flex-1 p-2 flex" onClick={()=>setData("kageyama")} >
            <div className="h-full flex-1 bg-center bg-cover rounded text-center flex justify-center items-center shadow" style={{backgroundImage: `url(${"/covers/kageyama.jpg"})`}}>
            <p className="font-semibold text-lg text-white">Kageyama</p>
            </div>
          </div>

        </div>

      




        <div className="h-20 w-full"></div>
      </main>

      <footer className="fixed bottom-0 flex items-center justify-center w-full border-t dark:border-black bg-white dark:bg-sexy">
        <div className="flex-1 flex justify-center">
          <HomeIcon className="h-8 w-8 text-gray-900 my-5 dark:text-sexy" />
        </div>
        <Link  href="/fire">
          <div className="flex-1 flex justify-center">
            <FireIcon className="h-8 w-8 text-gray-500 my-5 dark:text-gray-50" />
          </div>
        </Link>
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

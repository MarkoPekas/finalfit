import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import jsondata from "../data.json"


export const getStaticPaths = async () => {
    return {
        paths: [
            {  params: { id: 'todoroki' } },
            {  params: { id: 'bakugo' } },
            {  params: { id: 'ochako' } },
            {  params: { id: 'wrath' } },
            {  params: { id: 'greed' } },
            {  params: { id: 'envy' } },
            {  params: { id: 'sloth' } },
            {  params: { id: 'lust' } },
            {  params: { id: 'gluttony' } },
            {  params: { id: 'pride' } },
            {  params: { id: 'naruto' } },
            {  params: { id: 'sakura' } },
            {  params: { id: 'sasuke' } },
            {  params: { id: 'kakashi' } },
            {  params: { id: 'rocklee' } },
            {  params: { id: 'hinata' } },
            {  params: { id: 'kageyama' } },
            {  params: { id: 'bleach' } },
            {  params: { id: 'mikasa' } },
            {  params: { id: 'ippo' } },
            {  params: { id: 'saiki' } },
            {  params: { id: 'onepunch' } },
            {  params: { id: 'deku' } },
            {  params: { id: 'goku' } },
            {  params: { id: 'demonslayer' } },
            {  params: { id: 'aot' } },
            {  params: { id: 'hunter' } },
            {  params: { id: 'onepiece' } },
            {  params: { id: 'jojo' } },
            {  params: { id: 'baki' } },
            {  params: { id: 'asta' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    return {props: context.params};
}
export default function Home(req) {
    const router = useRouter()

    const [workout, setWorkout] = useState(0);
    let workouts = jsondata.characters[req.id].workout;
    const [timer, setTimer] = useState(workouts[workout][1]);
    const [pause, setPause] = useState(false);
    const [hint, setHint] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("ex") == undefined) localStorage.setItem("ex", 0);
        if(localStorage.getItem("count") == undefined) localStorage.setItem("count", 0);
        if(localStorage.getItem("hint") == undefined) localStorage.setItem("hint", 0);
        if(localStorage.getItem("hint") == 1) setHint(false);
        if(!pause && workouts[workout][2] === "sec"){
            const interval = setInterval(() => {
                setTimer(timer => timer - 1);
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
        
        
    }, [pause, workout]);
    if(workouts[workout+1] !== undefined){
        var nextup = <div className="flex p-2 h-32" onClick={() => {
            if (typeof window !== "undefined") {
                localStorage.setItem("ex", parseInt(localStorage.getItem("ex"))+1)
                if(localStorage.getItem(workouts[workout][0].replace(/\s/g, '').toLowerCase()) == undefined){
                    localStorage.setItem(workouts[workout][0].replace(/\s/g, '').toLowerCase(), 0);
                }
                localStorage.setItem(workouts[workout][0].replace(/\s/g, '').toLowerCase(), parseInt(localStorage.getItem(workouts[workout][0].replace(/\s/g, '').toLowerCase()))+workouts[workout][1])
            }
            setWorkout(workout => workout + 1);
            setTimer(workouts[workout+1][1]);
            
            }}>
                        <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/images/"+workouts[workout+1][0].replace(/\s/g, '').toLowerCase()+".gif"})`}}></div>
                        <div className="flex flex-col justify-center pl-5">
                            <p className="font-semibold text-lg dark:text-gray-50">{ workouts[workout+1][0] }</p>
                            <p className="text-gray-500">{ workouts[workout+1][1] } { workouts[workout+1][2] } • tap to continue</p>
                        </div>
                    </div>
    }else{
        var nextup = <div className="flex p-2 h-32" onClick={() => {router.back(); if (typeof window !== "undefined")localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1)}}>
                        <div className="h-full w-28 bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/images/rest.gif"})`}}></div>
                        <div className="flex flex-col justify-center pl-5">
                            <p className="font-semibold text-lg dark:text-gray-50">Almost There!</p>
                            <p className="text-gray-500">tap to finish</p>
                        </div>
                    </div>
    }

    if(timer === 0){
        if(workouts[workout+1] !== undefined){
            if (typeof window !== "undefined") {
                localStorage.setItem("ex", parseInt(localStorage.getItem("ex"))+1)
                if(localStorage.getItem(workouts[workout][0].replace(/\s/g, '').toLowerCase()) == undefined){
                    localStorage.setItem(workouts[workout][0].replace(/\s/g, '').toLowerCase(), 0);
                }
                localStorage.setItem(workouts[workout][0].replace(/\s/g, '').toLowerCase(), parseInt(localStorage.getItem(workouts[workout][0].replace(/\s/g, '').toLowerCase()))+workouts[workout][1])
            }
            setWorkout(workout => workout + 1);
            setTimer(workouts[workout+1][1]);
        }else{
            if (typeof window !== "undefined")
            localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1)
            router.back()
        }
    }

    return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-sexy">
        <Head>
          <title>Anime Workout</title>
          <meta charset='utf-8' />
        
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

        <div className={(hint)?"fixed p-3 top-0 w-full duration-500 delay-500 ease-in-out transform":"fixed p-3 top-0 w-full duration-500 delay-500 ease-in-out transform -translate-y-16 opacity-0"} onClick={() => {setHint(false);localStorage.setItem("hint", 1)}}>
            <div className="w-full p-3 h-full shadow rounded">
                <p className="text-lg text-center">Hint - tap the timer to pause it</p>
                <p className="text-sm opacity-80 text-center">and tap this to hide it</p>
            </div>
        </div>

        <main className="flex flex-col w-full h-full">
            <div className="w-full h-1/2 bg-contain bg-center" style={{backgroundImage: `url(${"/images/"+workouts[workout][0].replace(/\s/g, '').toLowerCase()+".gif"})`}}></div>
            <div className="flex-1 flex justify-center flex-col">
                <p className="font-semibold text-2xl text-center dark:text-gray-50">{ workouts[workout][0] }</p>
                <div onClick={() => {workouts[workout][2]=="sec"?setPause(!pause):null}}>
                    <p className="font-semibold text-9xl text-center dark:text-gray-50">{ timer }</p>
                </div>
                <p className="text-center dark:text-gray-50">{ workouts[workout][2] }</p>
            </div>
            {nextup}
        </main>
    </div>
    );
}

import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import jsondata from "../../data.json"
import { motion } from "framer-motion";
import Image from "next/image";
import Timer from "../../../components/Timer";

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
    const [count, setCount] = useState(0);
    const [paused, setPaused] = useState(false);
    const router = useRouter();
    let titles = {
        onepunchman: "One Punch Man",
        naruto: "Naruto",
        myheroacademia: "My Hero Academia",
        sds: "Seven Deadly Sins",
        demonslayer: "Demon Slayer",
        dragonballz: "Dragon Ball Z",
        haikyuu: "Haikyuu!!",
        bleach: "Bleach",
        aot: "Attack on Titan",
        hni: "Hajime No Ippo",
        onepiece: "One Piece",
        saikikuso: "Saiki Kuso",
        hunterxhunter: "Hunter X Hunter",
        jojosbizarreadventure: "JoJo's Bizarre Adventure",
        bakithegrappler: "Bakit the Grappler",
        blackclover: "Black Clover"
    }
    const activeExercise = jsondata.characters[router.query.id].workout[count]||['rest', 99, 'reps'];
    return(
        <div className="w-full h-screen flex">
            <Head>
                <title>The {router.query.id} workout - How did they train? Anime Workouts</title>
                <meta name="description" content={`Discover the ${router.query.id} workout. Training inspired by the show ${titles[jsondata.characters[router.query.id].showid]}. Discover their routines and become strong.`} />
                <script data-ad-client="ca-pub-7404737595748283" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <div className="flex-1 flex flex-col">
                <motion.div whileHover="hover" initial="rest" className="flex p-5">
                    <motion.div onClick={() => {router.back()}} whileTap={{scale: 0.9}} variants={{rest: {rotate: -90}, hover: {rotate: 0}}} className="flex items-center p-3 pr-6 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
                        </svg>
                    </motion.div>
                    <motion.div variants={{hover: {x: 0}, rest: {x: -80}}} className="flex">
                        <div className="h-full my-auto">
                            <div className="w-20 h-20 rounded-lg relative overflow-hidden">
                                <Image src={jsondata.characters[router.query.id].img} alt={`${router.query.id}`} layout="fill"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-medium px-4 pb-5  text-gray-800">{titles[jsondata.characters[router.query.id].showid]} Workout</h1>
                            <h2 className="text-xl font-medium px-4 text-gray-500 capitalize">{router.query.id}</h2>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="flex flex-1">
                    <div className="w-1/2 p-5 flex flex-col">
                        <div className="relative object-scale-down flex-1 border rounded-2xl overflow-hidden">
                            <Image src={`/images/${activeExercise[0].replace(/\s/g, '').toLowerCase()}.gif`} layout="fill" alt={activeExercise[0]} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="text-2xl p-5 font-medium text-gray-700">{activeExercise[0]}</p>
                        <div className="flex-1 flex-col flex justify-center items-center -mt-20">
                            <Timer paused={paused} type={activeExercise[2]} className="text-7xl text-gray-800" key={count} from={activeExercise[1]} onFinish={() => {setCount(count+1)}} />
                            <p className="text-gray-500">{activeExercise[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-l h-full w-96 overflow-x-auto no-scrollbar">
                <p className="p-5 text-xl font-medium text-gray-800">Timeline</p>
                {jsondata.characters[router.query.id].workout.map((item, index) => {
                    return(
                        <div className={`flex flex-col border-b ${count>index?'bg-gray-100':''}`}>
                            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() => setCount(index)} className="p-3 flex cursor-pointer">
                                <div className="h-16 w-16 rounded-lg relative overflow-hidden border">
                                    <Image src={`/images/${item[0].replace(/\s/g, '').toLowerCase()}.gif`} layout="fill" alt={item[0]} />
                                </div>
                                <div className="flex-1 p-1 px-4">
                                    <p className={`text-base font-medium ${count>index?'text-gray-400':''}`}>{item[0]}</p>
                                    <p className={`text-base ${count>index?'text-gray-300':'text-gray-500'}`}>{item[1]} {item[2]}</p>
                                </div>
                            </motion.div>
                            <div className="h-1 w-full overflow-hidden">
                                <motion.div key={index + count} animate={count>=index?{width: '100%'}:{width: '0%'}} transition={{duration: count!=index?0.001:item[1], ease: 'linear'}} className={`${count>index?'bg-gray-500':'bg-blue-500'} w-0 h-full`}></motion.div>
                            </div>
                        </div>
                )})}
            </div>
            <div className="fixed bottom-0 left-0 w-full h-36 p-5 flex justify-center">
                <div className="w-1/3 h-full shadow-xl rounded-2xl flex items-center justify-center bg-white">
                    <motion.div className="cursor-pointer" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setCount(count>0?count-1:0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-skip-back" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 5v14l-12 -7z" />
                            <line x1="4" y1="5" x2="4" y2="19" />
                        </svg>
                    </motion.div>
                    <motion.div className="mx-2 cursor-pointer" whileHover={{scale: 1.1}} whileTap={{scale: 0.9, rotate: 180}} onClick={() => setPaused(!paused)} >
                        {paused?<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 4v16l13 -8z"/>
                        </svg>:<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="6" y="5" width="4" height="14" rx="1" />
  <rect x="14" y="5" width="4" height="14" rx="1" />
</svg>}
                    </motion.div>
                    <motion.div className="cursor-pointer" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => setCount(count+1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-skip-forward" width="64" height="64" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 5v14l12 -7z" />
                            <line x1="20" y1="5" x2="20" y2="19" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

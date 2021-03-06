import Head from "next/head";
import { motion } from "framer-motion";

import jsondata from "../data.json";
import PcNav from "../../components/PcNav";
import Link from "next/link";

export default function Discover() {
    let characters = Object.keys(jsondata.characters); 
    return (
        <div className="w-full h-screen flex">
            <Head>
                <title>Discover Anime Inspired Workouts - OnePunchMan, Goku, All Might & many more</title>
                <meta name="description" content="Anime workout training, anime-inspired workouts from characters like Goku, OnePunchMan, All Might, Asta, Baki and many more. Become stronger with the help of anime." />
                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#66f"/>
                <script data-ad-client="ca-pub-7404737595748283" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <PcNav />
            <div className="flex-1 overflow-auto">
                <h1 className="text-3xl p-5 px-10 font-medium text-gray-800">Anime Workout Program</h1>
                <div className="w-full flex flex-wrap">
                    {characters.map((character) => {
                        return(
                        <div className="w-1/2 lg:w-1/3 xl:w-1/4 flex h-56 p-5">
                            <Link href={`routine/${character}`} >
                                <a className="w-full">
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-full h-full rounded p-3 bg-cover bg-center" style={{backgroundImage: `url(${jsondata.characters[character].img})`}}>
                                    <p className="text-white text-xl font-medium">{jsondata.characters[character].name}</p>
                                </motion.div>
                                </a>
                            </Link>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

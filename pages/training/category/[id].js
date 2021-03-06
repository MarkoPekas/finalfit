import Head from "next/head";
import { useRouter } from "next/router";
import PcNav from "../../../components/PcNav";
import jsondata from "../../data.json";
import { motion } from "framer-motion";
import Link from "next/link";

export const getStaticPaths = async () => {
    return {
        paths: [
            {  params: { id: 'quick' } },
            {  params: { id: 'legs' } },
            {  params: { id: 'arms' } },
            {  params: { id: 'chest' } },
            {  params: { id: 'core' } },
            {  params: { id: 'fullbody' } },
            {  params: { id: 'cardio' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    return {props: context.params};
}
export default function Home(req) {
    const router = useRouter();
    let characters = Object.keys(jsondata.characters); 
    let descriptions = {
        quick: "Quick workout for the quick ones. Be fast like the flash. Get your body moving with these anime inspired workouts.",
        legs: "Leg workout for the ones who love to run. Get your body moving with these anime inspired workouts workouts.",
        arms: "Anime arm workout for the ones who love to lift. Get your body moving with these workouts.",
        chest: "Chest workouts like seen in anime to look like Goku. Get your body moving with these workouts.",
        core: "Core workout for amazing stability and defined abs. Get your body moving with these workouts.",
        fullbody: "Full body workouts inspired by anime characters, for the ones who love to train. Get your body moving with these workouts.",
        cardio: "Cardio workouts inspired by anime characters for the ones who love to lift. Get your body moving with these workouts.",
    }

    let titles = {
        quick: "Quick Workouts",
        legs: "Leg Workouts",
        arms: "Arm Workouts",
        chest: "Chest Workouts",
        core: "Core Workouts",
        fullbody: "Full Body Workouts",
        cardio: "Cardio",
    }

    return(
        <div className="w-full h-screen flex">
            <Head>
                <title>Discover Anime Inspired Workouts - {titles[req.id]}</title>
                <meta name="description" content={`${descriptions[req.id]} Become stronger with the help of anime.`} />
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
                <h2 className="text-xl px-10 font-medium text-gray-600">{titles[req.id]}</h2>
                <h3 className="text-lg px-10 text-gray-600">{descriptions[req.id]}</h3>
                <div className="w-full flex flex-wrap">
                    {characters.map((character) => {
                        return(jsondata.characters[character].tags.includes(req.id) ?
                        <div className="w-1/2 lg:w-1/3 xl:w-1/4 flex h-56 p-5">
                            <Link href={`/training/routine/${character}`} >
                                <a className="w-full">
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="w-full cursor-pointer h-full rounded p-3 bg-cover bg-center" style={{backgroundImage: `url(${jsondata.characters[character].img})`}}>
                                    <p className="text-white text-xl font-medium">{jsondata.characters[character].name}</p>
                                </motion.div>
                                </a>
                            </Link>
                        </div>:null
                    )})}
                </div>
            </div>
        </div>
    )
}

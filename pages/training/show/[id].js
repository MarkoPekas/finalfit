import Head from "next/head";
import { useRouter } from "next/router";
import PcNav from "../../../components/PcNav";
import jsondata from "../../data.json";
import { motion } from "framer-motion";
import Link from "next/link";

export const getStaticPaths = async () => {
    return {
        paths: [
            {  params: { id: 'onepunchman' } },
            {  params: { id: 'naruto' } },
            {  params: { id: 'myheroacademia' } },
            {  params: { id: 'sds' } },
            {  params: { id: 'demonslayer' } },
            {  params: { id: 'dragonballz' } },
            {  params: { id: 'haikyuu' } },
            {  params: { id: 'bleach' } },
            {  params: { id: 'aot' } },
            {  params: { id: 'hni' } },
            {  params: { id: 'onepiece' } },
            {  params: { id: 'saikikuso' } },
            {  params: { id: 'hunterxhunter' } },
            {  params: { id: 'jojosbizarreadventure' } },
            {  params: { id: 'bakithegrappler' } },
            {  params: { id: 'blackclover' } },
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
        onepunchman: "Train like Saitama, but with a punch. Get your body moving with these anime inspired workouts.",
        naruto: "Train like Naruto, Sakura, Sasuke, Kakashi, Rock Lee. Get your body moving with these anime inspired workouts.",
        myheroacademia: "Train like Deku, Bakugo, Todoroki, Ochako and more. Get your body moving with these anime inspired workouts.",
        sds: "Train like the Seven Sins, Wrath, Greed, Envy, Sloth, Lust, Gluttony and Pride. Get your body moving with these anime inspired workouts.",
        demonslayer: "Train like a Demon Slayer.",
        dragonballz: "Train like Goku, Vegeta, Piccolo, Gohan, and more. Get your body moving with these anime inspired workouts.",
        haikyuu: "Train like the main characters of Haikyuu (Hinata and Kageyama). Get your body moving with these anime inspired workouts.",
        bleach: "Train like Ichigo.",
        aot: "Train like Mikasa and the Survey Core.",
        hni: "Train like Ippo.",
        onepiece: "Become super flexible like Luffy and the rest of the crew. Get your body moving with these anime inspired workouts.",
        saikikuso: "Train like an esper, Saiki Kuso.",
        hunterxhunter: "Train like the main characters of Hunter X Hunter.",
        jojosbizarreadventure: "Jojo's Bizzare Workout, Train a bizzare workout.",
        bakithegrappler: "Train like a Baki, become the strongest grappler of all.",
        blackclover: "Train like Asta, master your body."
    }

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

    return(
        <div className="w-full h-screen flex">
            <Head>
                <title>Discover Anime Inspired Workouts - OnePunchMan, Goku, All Might & many more</title>
                <meta name="description" content={`${descriptions[router.query.id]} Become stronger with the help of anime. ${titles[router.query.id]} inspired workouts.`} />
            </Head>
            <PcNav />
            <div className="flex-1 overflow-auto">
                <h1 className="text-3xl p-5 px-10 font-medium text-gray-800">Anime Workout Program</h1>
                <h2 className="text-xl px-10 font-medium text-gray-600">{titles[router.query.id]}</h2>
                <h3 className="text-lg px-10 text-gray-600">Discover workouts with the characters from <strong>{titles[router.query.id]}</strong>. {descriptions[router.query.id]}</h3>
                <div className="w-full flex flex-wrap">
                    {characters.map((character) => {
                        return(jsondata.characters[character].showid === router.query.id ?
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
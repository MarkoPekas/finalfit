import Image from "next/image"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { AcademicCapIcon } from '@heroicons/react/outline'
import jsondata from "./data.json"
import Head from "next/head";
import SplashScreen from "../components/splashScreen";

export default function Desktop() {
    const [scrollH, setScrollH] = useState(0);
    const [navColor, setNavColor] = useState("blue");
    const [selectedCharacter, setSelectedCharacter] = useState('onepunch');

    let characters = Object.keys(jsondata.characters);

    function scrollIntoViewById(id) {
        let element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleScroll = () => {
        setScrollH(window.scrollY);
        let elementTarget = document.getElementById("waves");
        console.log(window.scrollY, (elementTarget.offsetTop + elementTarget.offsetHeight));
        if (window.scrollY + 110 > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
            setNavColor("white");
        }else{
            setNavColor("blue");
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Head>
                <title>Anime Workout Program - Train Like Anime Characters, OnePunchMan, Goku and More</title>
                <meta name="description" content="Anime workouts, train like onepunchman, deku, asta and many more. 33+ unique character specific workouts for beginners, advanced and pro's. Get in shape with the Anime Workout Program App." />
                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
                <meta name="theme-color" content="#66f"/>
            </Head>
            <div className="w-full px-10 backdrop-filter z-20 backdrop-blur transition-colors flex fixed">
                <div className={`h-20  border-b flex-1 flex overflow-hidden transition-colors items-center ${navColor==="white"?'text-gray-800':'text-white'}`}>
                    <div onClick={() => scrollIntoViewById('waves')} className="h-20 w-20 ml-8 cursor-pointer">
                        <img src="/logo.png" alt="icon" />
                    </div>
                    <h1 onClick={() => scrollIntoViewById('waves')} className={`font-medium cursor-pointer transition-colors text-xl ${navColor==="white"?'text-gray-800':'text-white'}`}>Anime Workout Program</h1>
                    <div className="flex-1"></div>
                    <div className="flex cursor-pointer justify-center items-center h-full p-6" onClick={() => scrollIntoViewById('features')}>
                        <motion.p whileHover={{scale: 1.1}}>Features</motion.p>
                    </div>
                    <div className="flex cursor-pointer justify-center items-center h-full p-6" onClick={() => scrollIntoViewById('characters')}>
                        <motion.p whileHover={{scale: 1.1}}>Characters</motion.p>
                    </div>
                    <div className="flex cursor-pointer justify-center items-center h-full p-6" onClick={() => scrollIntoViewById('stats')}>
                        <motion.p whileHover={{scale: 1.1}}>Stats</motion.p>
                    </div>
                    <div className="flex cursor-pointer justify-center items-center h-full p-6" onClick={() => scrollIntoViewById('footer')}>
                        <motion.p whileHover={{scale: 1.1}}>Contact Us</motion.p>
                    </div>
                </div>
            </div>
            <div className="h-screen flex flex-col bg-sexyblue" id="waves">
                <div className="flex flex-1">
                    <div className="flex-1 flex justify-end items-center flex-col px-20 -mb-16 z-10">
                        <h1 className="text-5xl text-gray-100 font-medium text-center p-10">Train Like Anime Characters</h1>
                        <p className="text-gray-200">Izuku Midoriya • OnePunchMan • Goku • Bakugo • Naruto</p>
                        <p className="text-gray-200 text-sm">and so many more...</p>
                        <div className="flex">
                            <motion.div 
                            whileHover={{
                                scale: 1.1
                            }}
                            className="w-60">
                                <a href='https://play.google.com/store/apps/details?id=app.netlify.silly_hopper_af3a11.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                            </motion.div>
                            <div className="w-60 p-4">
                                <motion.a href="/training/discover" className="rounded cursor-pointer text-gray-100 flex justify-center items-center text-lg border-2 w-full h-full" 
                                whileTap={{
                                scale: 0.9
                                }} whileHover={{ scale: 1.1 }}>
                                    Try It Out!
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end items-center flex-col overflow-visible z-0 pr-52">
                        <motion.div className='absolute top-24' animate={{y:[20, 0, 20]}} transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 6
                        }} id="phone">
                            <Image src="/pl.png" alt="phone" width={500} height={500} className="z-0" />
                        </motion.div>
                        <motion.div animate={{y:[15, 0, 15]}} transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 6,
                            delay: 1
                        }} className="absolute top-24 pl-96">
                            <Image src="/pr2.png" alt="phone" width={400} height={400} className="z-0" />
                        </motion.div>
                    </div>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-sexyblue" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L18.5,128C36.9,160,74,224,111,240C147.7,256,185,224,222,218.7C258.5,213,295,235,332,208C369.2,181,406,107,443,85.3C480,64,517,96,554,90.7C590.8,85,628,43,665,48C701.5,53,738,107,775,144C812.3,181,849,203,886,208C923.1,213,960,203,997,186.7C1033.8,171,1071,149,1108,160C1144.6,171,1182,213,1218,229.3C1255.4,245,1292,235,1329,197.3C1366.2,160,1403,96,1422,64L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
            </div>
            <div className="bg-white flex flex-col items-center pb-10 pt-10" id="features">
                <div className="flex pt-10">
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                    <p className="text-lg text-gray-700 font-medium">WHY EVEN BOTHER?</p>
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                </div>
                <h2 className="text-5xl font-semibold p-4 text-gray-700">FEATURES</h2>
                <div className="h-96 flex px-32 w-full">
                    <div className="flex-1 h-full p-10">
                        <div className="w-full h-full shadow flex flex-col rounded items-center justify-center p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12h4l3 8l4 -16l3 8h4" />
                            </svg>
                            <p className="text-xl text-gray-700 font-medium">STAY ACTIVE</p>
                            <p className="p-3 text-center">Get into an active lifestyle and stay active with the help of your favourite anime characters.</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full p-10">
                        <div className="w-full h-full shadow flex flex-col rounded items-center justify-center p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                                <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                            </svg>
                            <p className="text-xl text-gray-700 font-medium">SMALL FILE SIZE</p>
                            <p className="p-3 text-center">With a tiny file size of only 645kB, you have no reason not to try! A life of fitness awaits.</p>
                        </div>
                    </div>
                    <div className="flex-1 h-full p-10">
                        <div className="w-full h-full shadow flex flex-col rounded items-center justify-center p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-2" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                <polyline points="4 12 12 16 20 12" />
                                <polyline points="4 16 12 20 20 16" />
                            </svg>
                            <p className="text-xl text-gray-700 font-medium">33+ UNIQUE WORKOUTS</p>
                            <p className="p-3 text-center">Over 33 unique characters and workouts await. Each one different from the next.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-gray-50 flex-col flex items-center pt-10" id="characters">
                <div className="flex pt-10">
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                    <p className="text-lg text-gray-700 font-medium">WHAT WE HAVE?</p>
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                </div>
                <h2 className="text-5xl font-semibold p-4 text-gray-700">CHARACTERS</h2>
                <div className="flex w-full h-full overflow-hidden">
                    <div className="flex-1 border-r flex flex-col items-end overflow-auto no-scrollbar">
                        {characters.map((character, index) => (
                            <div className={`p-3 border-b text-gray-500 hover:text-gray-900 transition-all hover:text-lg ${character===selectedCharacter?'text-xl font-medium':''}`} onClick={() => setSelectedCharacter(character)}><p>{jsondata.characters[character].name}</p></div>    
                        ))}

                    </div>
                    <div className="flex-1 relative">
                        <Image className="object-cover" src={jsondata.characters[selectedCharacter].img} alt={selectedCharacter} layout="fill" />
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col items-center" id="stats">
                <div className="flex pt-20">
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                    <p className="text-lg text-gray-700 font-medium">WHAT WE ACHIEVED</p>
                    <span className="w-8 h-px bg-gray-700 mt-3.5 mx-2"></span>
                </div>
                <h2 className="text-5xl font-semibold p-4 text-gray-700">STATS</h2>
                <div className="h-72 flex px-64 w-full">
                    <div className="flex-1 p-10 flex">
                        <div className="flex-1 border flex p-5">
                            <div className="flex flex-col justify-between flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-download" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
                                    <line x1="12" y1="13" x2="12" y2="22" />
                                    <polyline points="9 19 12 22 15 19" />
                                </svg>
                                <p className="text-4xl font-medium">32,584</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className="p-3 rounded bg-sexyblue -mr-10 text-white font-medium "><p>Downloads</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-10 flex">
                        <div className="flex-1 border flex p-5">
                            <div className="flex flex-col justify-between flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stars" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                    <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                    <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                </svg>
                                <p className="text-4xl font-medium">4,3<span className="font-light text-2xl text-gray-400">/5</span></p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className="p-3 rounded bg-sexyblue -mr-10 text-white font-medium "><p>Rating</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-10 flex">
                        <div className="flex-1 border flex p-5">
                            <div className="flex flex-col justify-between flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-writing" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#6666ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
                                    <path d="M16 7h4" />
                                    <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
                                </svg>
                                <p className="text-4xl font-medium">159</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className="p-3 rounded bg-sexyblue -mr-10 text-white font-medium"><p>Reviews</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer" className="p-20 pt-8 text-center mx-20 border-t">
                <p className="text-xl text-gray-800">A Footer And A Disclaimer</p>
                <p>The Anime Workout Program features materials protected by the Fair Use guidelines of Section 107 of the Copyright Act. All rights reserved to the copyright owners.</p>
                
                <p><a className="text-sexy" href="https://play.google.com/store/apps/details?id=app.netlify.silly_hopper_af3a11.twa">Download The App</a> - <a className="text-sexy" href="/training/discover">Try The Desktop Version</a></p>
                <p className="text-sm">Contact Us: <a href = "mailto: pekasmarko@gmail.com" className="text-sexy">pekasmarko@gmail.com</a></p>
            </footer>
            
        </div>
    )
}
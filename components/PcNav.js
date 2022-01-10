import { useRouter } from "next/router";
import Image from "next/image";
import PcNavItem from "./PcNavItem";
import PcNavItemBig from "./PcNavItemBig";
import Link from "next/link";
export default function PcNav() {
    const router = useRouter();
    return(
        <div className="w-64 h-full border-r px-5 overflow-scroll no-scrollbar">
            <Link href="/training/discover">
                <div className="h-20 w-20 p-2 cursor-pointer">
                    <div className="relative w-full h-full">
                        <Image src="/logo.png" alt="logo" layout="fill" />
                    </div>
                </div>
            </Link>

            <p className="text-gray-400 p-4 text-sm">CATEGORIES</p>
            <PcNavItemBig name="Quick" icon="timer" link="/training/category/quick" />
            <PcNavItemBig name="Legs" icon="run" link="/training/category/legs" />
            <PcNavItemBig name="Arms" icon="hand" link="/training/category/arms" />
            <PcNavItemBig name="Chest" icon="shield" link="/training/category/chest" />
            <PcNavItemBig name="Core" icon="dots" link="/training/category/core" />
            <PcNavItemBig name="Full Body" icon="manInCircle" link="/training/category/fullbody" />
            <PcNavItemBig name="Cardio" icon="heart" link="/training/category/cardio" />


            <p className="text-gray-400 p-4 pt-8 text-sm">SHOWS</p>
            <PcNavItem name="OnePunchMan" link="/training/show/onepunchman" />
            <PcNavItem name="Naruro" link="/training/show/naruto" />
            <PcNavItem name="My Hero Academia" link="/training/show/myheroacademia" />
            <PcNavItem name="Seven Deadly Sins" link="/training/show/sds" />
            <PcNavItem name="Demon Slayer" link="/training/show/demonslayer" />
            <PcNavItem name="Dragon Ball Z" link="/training/show/dragonballz" />
            <PcNavItem name="Haikyuu!!" link="/training/show/haikyuu" />
            <PcNavItem name="Bleach" link="/training/show/bleach" />
            <PcNavItem name="Attack On Titan" link="/training/show/aot" />
            <PcNavItem name="Hajime no Ippo" link="/training/show/hni" />
            <PcNavItem name="One Piece" link="/training/show/onepiece" />
            <PcNavItem name="Saiki Kuso" link="/training/show/saikikuso" />
            <PcNavItem name="HunterXHunter" link="/training/show/hunterxhunter" />
            <PcNavItem name="JoJo's Bizzare Adventure" link="/training/show/jojosbizarreadventure" />
            <PcNavItem name="Baki The Grappler" link="/training/show/bakithegrappler" />
            <PcNavItem name="Black Clover" link="/training/show/blackclover" />
        </div>
    )
}
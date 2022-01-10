import { motion } from "framer-motion";
import Link from "next/link";

export default function PcNavItem(props) {
    return(
        <Link href={props.link}>
            <a>
            <motion.div initial="rest" whileHover="hover" animate="rest" whileTap="tap" className="p-2 relative border-b cursor-pointer">
                <motion.div variants={{rest:{opacity: -1, x:-25}, hover: {opacity: 1, rotate: 90, x:0}, tap: {x:200}}} className="font-medium absolute text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="18" y1="11" x2="12" y2="5" />
                        <line x1="6" y1="11" x2="12" y2="5" />
                    </svg>
                </motion.div>
                <motion.p variants={{rest: {x:0}, hover: {x:25}, tap: {opacity: 0, transition: {duration: 0.1}}}} className="text-gray-500">{props.name}</motion.p>
            </motion.div>
            </a>
        </Link>
    )
}
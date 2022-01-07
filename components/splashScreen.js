import { useEffect, useState } from "react";

export default function SplashScreen() {
    const [bg, setBg] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setBg(1);
        }, 100);
        setTimeout(() => {
            setBg(2);
        }
        , 250);
    }, []);
    return (
        <div className="fixed w-screen z-50 h-screen transition-colors duration-150" style={{backgroundColor: `${bg===1?'rgba(255,255,255,0)':'rgba(255,255,255,1)'}`, display: `${bg===2?'none':'flex'}`}}>

        </div>
    )
}
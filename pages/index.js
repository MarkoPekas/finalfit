import Mobile from "./mobile";
import Desktop from "./desktop";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import SplashScreen from "../components/splashScreen";
export default function Home(){
  const [phoneismaybe, setPhone] = useState(false);
  useEffect(() => {
    if(isMobile){
      setPhone(true);
    }
  }, []);
  return(phoneismaybe?<div><SplashScreen/><Mobile/></div>:<div><SplashScreen/><Desktop/></div>)
}
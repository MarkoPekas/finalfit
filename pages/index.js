import Mobile from "./mobile";
import Desktop from "./desktop";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
export default function Home(){
  const [phoneismaybe, setPhone] = useState(false);
  useEffect(() => {
    if(isMobile){
      setPhone(true);
    }
  }, []);
  return(phoneismaybe?<Mobile/>:<Desktop/>)
}
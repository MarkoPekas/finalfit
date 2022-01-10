import { useEffect } from "react";
import { useState } from "react/cjs/react.development"

export default function Timer(props){
    const [count, setCount] = useState(props.from);
    useEffect(() => {
        if(props.type === 'sec'){
            const interval = setInterval(() => {
                if(!props.paused)
                setCount(count - 1);
                if (count === 0) {
                    clearInterval(interval);
                    props.onFinish();
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    })
    
    return (
        <p className={props.className}>{count}</p>
    )
}
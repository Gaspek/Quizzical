import Intro from "./Intro";
import { useState } from "react";
import Quiz from "./Quiz";

export default function Main(){
    const [isGameStarted, setIsGameStarted] = useState(false)
    
    function startGame(){
        setIsGameStarted(true)
    }
    
    return (
        <main>
            {isGameStarted? <Quiz /> : <Intro startGame={(startGame)}/>}
        </main>
    )
}
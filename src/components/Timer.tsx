import { type GameState } from "../types";
import { useEffect, type FC } from "react";

type TimerProps = {
    gameState: GameState;
    onReady: () => void;
}

const Timer: FC<TimerProps> = ({gameState, onReady}) => {
    useEffect(() => {
        if (gameState === "waiting"){
            const delay = Math.random() * 3000 + 2000;
            const timeout = setTimeout(() => {
                onReady()
            }, delay)
            return () => clearTimeout(timeout)
        }
    }, [gameState])

    return(
        <div>
            
        </div>
    )
}
export default Timer;
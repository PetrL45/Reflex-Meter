import { useEffect, useState } from "react"
import reactionStyles from "../styles/ReactionTimePage.module.css"
import { type GameState } from "../types";
import { Link } from "react-router";
import { Home } from "lucide-react";

const ReactionTimePage = () => {
    const [startTime, setStartTime] = useState(0)
    const [reactionTime, setReactionTime] = useState(0)
    const [bestTime, setBestTime] = useState(0)
    const [currentState, setCurrentState] = useState<GameState>('idle')
    const [attemps, setAttemps] = useState(0)
    const [avg, setAvg] = useState(0)
    const [totalTime, setTotalTime] = useState(0)

    const onReady = () => {
        setCurrentState('ready')
    }

    useEffect(() => {
        if (currentState === "waiting"){
            const delay = Math.random() * 300 + 2000;
            const timeout = setTimeout(() => {
                onReady()
                setStartTime(Date.now())
            }, delay)
            return () => clearTimeout(timeout)
        }
    }, [currentState])

    const clickHandler = () => {
        console.log(currentState)
        if(currentState === 'idle'){
            handleStartTimer()
        }
        if(currentState === 'waiting'){
            handleEarlyClick()
        }
        if(currentState === 'early'){
            handleReset()
        }
        if(currentState === 'ready'){
            handleValidReaction()
        }
        if(currentState === 'clicked'){
            handleReset()
        }
    }

    const handleStartTimer = () => {
        setCurrentState('waiting')
        setReactionTime(0)
    }

    const handleEarlyClick = () => {
        setCurrentState("early")
    }

    const handleValidReaction = () => {
        const newReactionTime = Date.now() - startTime
        const newAttempts = attemps + 1 
        const newTotalTime = totalTime + newReactionTime
        const newAvg = newTotalTime / newAttempts  

        setCurrentState('clicked')
        setReactionTime(newReactionTime)
        setTotalTime(newTotalTime)
        setAttemps(newAttempts)
        setAvg(newAvg)

        if(bestTime === 0 || newReactionTime < bestTime){
            setBestTime(newReactionTime)
        }
    }

    const handleReset = () => {
        setCurrentState('waiting')
    }

    return(
        <div className={reactionStyles.container}>
            <Link to="/" className={reactionStyles.backBtn}> 
                <Home />
            </Link>
            <div className={reactionStyles.testContainer} onClick={clickHandler}>
                {currentState === 'idle' && (
                    <div className={reactionStyles.idle}>
                        <h4>Reaction Time Test</h4>
                        <p>Click anywhere to start</p>
                    </div>
                )}
                {currentState === 'waiting' &&(
                    <div className={reactionStyles.waiting}>
                        <h4>Wait for green...</h4>
                        <p>Don't click yet</p>
                    </div>
                )}
                {currentState === 'ready' &&(
                    <div className={reactionStyles.ready}>
                        <h4>CLICK NOW!</h4>
                        <p>As fast as you can</p>
                    </div>
                )}
                {currentState === 'clicked' &&(
                    <div className={reactionStyles.clicked}>
                        <h4>{reactionTime} ms</h4>
                        <p>Click to try again</p>
                    </div>
                )}
                {currentState === 'early' &&(
                    <div className={reactionStyles.early}>
                        <h4>Too Early!</h4>
                        <p>Wait for green. Click to retry</p>
                    </div>
                )}
            </div>
            <div className={reactionStyles.statistic}>
                <p>⚡Statistics</p>
                <div className={reactionStyles.average}>
                    <p>⏱️Average</p>
                    <p className={reactionStyles.stat}>
                        {attemps === 0 ? '—' : avg + " ms"}
                    </p>
                </div>
                <div className={reactionStyles.best}>
                    <p>⚡Best</p>
                    <p className={reactionStyles.stat}>
                        {attemps === 0 ? '—' : bestTime + " ms"}
                    </p>
                </div>
                <div className={reactionStyles.attemps}>
                    <p>Attemps</p>
                    <p className={reactionStyles.stat}>{attemps}</p>
                </div>
            </div>
        </div>
    )
}
export default ReactionTimePage;
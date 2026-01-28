import { useEffect, useState } from "react"
import reactionStyles from "../styles/ReactionTimePage.module.css"
import { type GameState } from "../types";

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
        setCurrentState('clicked')
        setReactionTime(Date.now() - startTime)
        if(bestTime === 0 || reactionTime < bestTime){
            setBestTime(reactionTime)
        }
        const newTotalTime = totalTime + reactionTime
        const newAttempts = attemps + 1
        setTotalTime(newTotalTime)
        setAttemps(a => a + 1)
        setAvg(newTotalTime / newAttempts)
    }

    const handleReset = () => {
        setCurrentState('waiting')
    }

    return(
        <div className={reactionStyles.container}>
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
                        <h4>{reactionTime}ms</h4>
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
                    <p className={reactionStyles.stat}>{avg}</p>
                </div>
                <div className={reactionStyles.best}>
                    <p>⚡Best</p>
                    <p className={reactionStyles.stat}>{bestTime}</p>
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
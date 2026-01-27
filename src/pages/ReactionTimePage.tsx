import reactionStyles from "../styles/ReactionTimePage.module.css"
const ReactionTimePage = () => {
    return(
        <div className={reactionStyles.container}>
            <div className={reactionStyles.testContainer} onClick={() => console.log("Clicked")}>
                <h3>Reaction Time Test</h3>
                <p>Click anywhere to start</p>
            </div>
            <div className={reactionStyles.statistic}>
                <p>⚡Statistics</p>
                <div className={reactionStyles.average}>
                    <p>⏱️Average</p>
                    <p></p>
                </div>
                <div className={reactionStyles.best}>
                    <p>⚡Best</p>
                    <p></p>
                </div>
                <div className={reactionStyles.attemps}>
                    <p>Attemps</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default ReactionTimePage;
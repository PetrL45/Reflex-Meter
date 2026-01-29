import { Link } from "react-router";
import styles from "../styles/HomePage.module.css";
import { Zap } from "lucide-react";
import { Target } from "lucide-react"; 

const HomePage = () => {
    return(
        <div className={styles.Home}>
            <h1>REACTION METER</h1>
            <div className={styles.container}>
                <Link to="/test/ReactionTime">
                    <div className={styles.test}>
                        <Zap className={styles.zap} />
                        <h2>REACTION TEST</h2>
                        <p>Test how fast you can react when screen turns green</p>
                        <span>Play now &#8594;</span>
                    </div>
                </Link>
                <Link to="/training/Aim">
                    <div className={styles.aim}>
                        <Target className={styles.target} />
                        <h2>AIM TRAINER</h2>
                        <p>Click on targets as quickly as possible to improve your aim</p>
                        <span>Play now &#8594;</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default HomePage;
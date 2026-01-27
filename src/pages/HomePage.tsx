import { Link } from "react-router";
import styles from "../styles/HomePage.module.css"

const HomePage = () => {
    return(
        <div className={styles.Home}>
            <h1>REACTION METER</h1>
            <Link to="/test/ReactionTime"><h2>REACTION TEST</h2></Link>
            <Link to="/training/Aim"><h2>AIM TRAINER</h2></Link>
        </div>
    )
}
export default HomePage;
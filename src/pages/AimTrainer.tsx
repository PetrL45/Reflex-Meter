import { Link } from 'react-router';
import aimStyles from '../styles/AimTrainer.module.css'
import { Home, RotateCcw } from 'lucide-react';

const AimTrainer = () => {
    return(
        <div className={aimStyles.container}>
            <div className={aimStyles.header}>
                <Link to="/" className={aimStyles.backBtn}> 
                    <Home />
                </Link>
                <div className={aimStyles.stats}>
                    <div>
                        <p>Score: </p>
                    </div>
                    <div>
                        <p>Time: </p>
                    </div>
                </div>
                <div className={aimStyles.refresh}>
                    <RotateCcw />
                </div>
            </div>
        </div>
    )
}
export default AimTrainer;
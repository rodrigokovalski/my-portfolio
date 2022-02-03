import styles from './styles.module.scss'

import Whatsapp from '../../assets/whatsapp.png'

export function SocialButton() {
    return (
        <div className={styles.social}>
            <a href="https://api.whatsapp.com/send/?phone=5541995845842" target="_blank" rel="noreferrer">
                <img src={Whatsapp} alt="Whatsapp" width="50" height="50"/>
            </a>
        </div>
    );
}
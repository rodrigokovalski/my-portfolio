import styles from './styles.module.scss'

import ArrowUp from '../../assets/chevron-up.svg'

export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    
                </div>
                <a href="#home">
                    <img src={ArrowUp} alt="" width="25"/>
                </a>
            </div>
        </footer>
    );
}
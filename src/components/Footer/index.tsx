import styles from './styles.module.scss'

import { Link , animateScroll as scroll } from 'react-scroll'

import ArrowUp from '../../assets/chevron-up.svg'
import image from '../../assets/css.svg'

export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.picture}>
                    </div>
                    <div className={styles.info}>
                        <ul>
                            <li>linkedin</li>
                            <li>GitHub</li>
                            <li>Instagram</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                </div>
                <Link 
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <img src={ArrowUp} alt="" width="25"/>
                </Link>
            </div>
        </footer>
    );
}
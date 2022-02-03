import styles from './styles.module.scss'

import { Link , animateScroll as scroll } from 'react-scroll'

import ArrowUp from '../../assets/chevron-up.svg'

export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    
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
import styles from './styles.module.scss'

import { Link , animateScroll as scroll } from 'react-scroll'

import ArrowUp from '../../assets/chevron-up.svg'


export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.picture}>
                    </div>
                    <div className={styles.info}>
                        <ul>
                            
                        </ul>
                    </div>
                </div>
                <Link 
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.scrollTop}
                >
                    <img src={ArrowUp} alt="" width="25"/>
                </Link>
            </div>
        </footer>
    );
}
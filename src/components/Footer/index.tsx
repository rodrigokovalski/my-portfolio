import styles from './styles.module.scss'

import { Link , animateScroll as scroll } from 'react-scroll'

import ArrowUp from '../../assets/chevron-up.svg'
import MyPic from '../../assets/profile.png'
import Insta from '../../assets/insta.svg'
import Linkedin from '../../assets/linkedin.svg'
import Git from '../../assets/github.svg'
import Email from '../../assets/email.svg'

export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.picture}>
                        <img src={MyPic} alt="Rodrigo Kovaslski" />
                    </div>
                    <div className={styles.info}>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/rodrigokvk/" target="_blank">
                                    <img src={Linkedin} alt="linkedin" /> <span>Linkedin/rodrigokvk</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/rodrigokovalski" target="_blank">
                                    <img src={Git} alt="github" /> <span>GitHub/rodrigokovalski</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/__rodrigkvii/" target="_blank">
                                    <img src={Insta} alt="instagram" /> <span>@__rodrigkvii</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:rodrigokvk@gmail.com" target="_blank">
                                    <img src={Email} alt="gmail" /> <span>rodrigokvk@gmail.com</span>
                                </a>
                            </li>
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
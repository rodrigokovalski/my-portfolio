import styles from './styles.module.scss'

import { Link , animateScroll as scroll } from 'react-scroll'

import ArrowUp from '../../assets/chevron-up.svg'
import profilePicture from '../../assets/pp.jpg'

import Instagram from '../../assets/instagram-square-brands.svg'
import Linkedin from '../../assets/linkedin-brands.svg'
import Github from '../../assets/github-square-brands.svg'
import Email from '../../assets/envelope-solid.svg'

export function Footer(){
    return (
        <footer className={styles.content} id="contact">
            <div className={styles.container}>
                <div className={styles.contact}>
                    <div className={styles.picture}>
                        <img src={profilePicture} alt="" />
                    </div>
                    <div className={styles.info}>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/rodrigokvk/" target="_blank">
                                    <img src={Linkedin} alt="" /> <span>Linkedin/rodrigokvk</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/rodrigokovalski" target="_blank">
                                    <img src={Github} alt="" /> <span>GitHub/rodrigokovalski</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/__rodrigkvii/" target="_blank">
                                    <img src={Instagram} alt="" /> <span>@__rodrigkvii</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:rodrigokvk@gmail.com" target="_blank">
                                    <img src={Email} alt="" /> <span>rodrigokvk@gmail.com</span>
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
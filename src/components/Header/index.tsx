import styles from './styles.module.scss'

import { Link, animateScroll as scroll } from 'react-scroll'

export function Header() {
    return (
        <header className={styles.content}>
            <div className={styles.container}>
            <a href="#home">
                <div className={styles.logo}>
                    Rodrigo Kovalski
                </div>
            </a>
            <nav>
                <Link 
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    About me
                </Link>
                <Link 
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link>
                <Link 
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Projects
                </Link>
                <Link 
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Contact me
                </Link>
            </nav>
            </div>
        </header>
    )
}
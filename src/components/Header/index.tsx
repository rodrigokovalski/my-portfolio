import styles from './styles.module.scss'

import { Link, animateScroll as scroll } from 'react-scroll'

export function Header() {
    return (
        <header className={styles.content}>
            <div className={styles.container}>
            <a href="#home">
                <Link 
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.logo}>
                      Rodrigo Kovalski
                  </div>
                </Link>   
            </a>
            <nav>
                <Link 
                    to="about"
                    offset={-50}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    About me
                </Link>
                <Link 
                    to="skills"
                    offset={-50}
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link>
                <Link 
                    to="projects"
                    offset={-50}
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
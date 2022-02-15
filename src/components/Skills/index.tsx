import styles from './styles.module.scss'

import  Html  from '../../assets/html.svg'
import  Css  from '../../assets/css.svg'
import  Web  from '../../assets/web.svg'
import  Js  from '../../assets/js.svg'
import Bs from '../../assets/bootstrap.svg'
import React from '../../assets/react.svg'

export function Skills(){
    return (
        <div className={styles.content} id="skills">
            <div className={styles.container}>
                <h2>
                    <span>Skills</span>
                </h2>
                <div className={styles.flex}>
                    <div className={styles.card} data-aos="flip-left">
                        <div className={styles.wrapper}>
                            <img src={Web} alt="Web Development" />
                            <h3>Web Development</h3>
                            <p>Tools and knowledge to improve performace of your website!</p>
                        </div>
                    </div>
                    <div className={styles.card} data-aos="flip-left" data-aos-duration="1000">
                        <div className={styles.wrapper}>
                            <img src={Html} alt="Html5" />
                            <h3>HTML5</h3>
                            <p>Using best practices to create a semantic page structure!</p>
                        </div>
                    </div>
                    <div className={styles.card} data-aos="flip-left" data-aos-duration="1000">
                        <div className={styles.wrapper}>
                            <img src={Css} alt="Css3" />
                            <h3>CSS3</h3>
                            <p>Styling your page with responsive designs and cool animations!</p>
                        </div>
                    </div>
                    <div className={styles.card} data-aos="flip-left" data-aos-duration="1000">
                        <div className={styles.wrapper}>
                            <img src={Js} alt="JavaScript" />
                            <h3>JavaScript</h3>
                            <p>Coding your page with scalable and performatic scripts!</p>
                        </div>
                    </div>
                    <div className={styles.card} data-aos="flip-left" data-aos-duration="1000">
                        <div className={styles.wrapper}>
                            <img src={Bs} alt="Bootstrap" />
                            <h3>Bootstrap</h3>
                            <p>A framework that helps me to be more productive when developing!</p>
                        </div>
                    </div>
                    <div className={styles.card} data-aos="flip-left" data-aos-duration="1000">
                        <div className={styles.wrapper}>
                            <img src={React} alt="ReactJS" />
                            <h3>ReactJS</h3>
                            <p>An awesome library that has been used by most of Front-End engineers!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
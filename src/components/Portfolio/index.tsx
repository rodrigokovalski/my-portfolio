import styles from './styles.module.scss'

import Case from '../../assets/projetos.svg'

export function Portfolio(){
    return (
        <div className={styles.content} id="projects">
            <div className={styles.container}>
                <h2>
                    <span>
                        Projects
                    </span>
                </h2>
                <div className={styles.flex}>
                    <div className={styles.wrapper} data-aos="flip-up" data-aos-duration="1200">
                        <div className={styles.image}>
                            <img src={Case} alt=""/>
                        </div>
                        <div className={styles.card}>
                            <h3>Este é um título exemplo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className={styles.wrapper} data-aos="flip-up" data-aos-duration="1200">
                        <div className={styles.image}>
                            <img src={Case} alt=""/>
                        </div>
                        <div className={styles.card}>
                            <h3>Este é um título exemplo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
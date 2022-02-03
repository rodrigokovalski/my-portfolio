import styles from './styles.module.scss'

import  BgGuy from '../../assets/desktop-guy.svg'

export function PageTitle() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <img src={BgGuy} alt="" />
                </div>
                <div className={styles.title}>
                    <h1>
                        Hey, I'm a <br />
                            Front End Developer!
                    </h1>
                </div>
            </div>
        </div>
    );
}
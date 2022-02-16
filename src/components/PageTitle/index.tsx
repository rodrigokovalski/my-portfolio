import styles from './styles.module.scss'

export function PageTitle() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        Hey, I'm a <br />
                    </h1>
                    <p className={styles.typing}>Front End Engineer!</p>
                </div>
            </div>
        </div>
    );
}
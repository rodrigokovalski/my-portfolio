import styles from './styles.module.scss'
import CardInfo from '../../assets/desktop-guy.svg'

export function About(){
    return (
        <div className={styles.content} id="about">
          <div className={styles.container}>  
            <h2>
                <span>About Me</span>
            </h2>
            <div className={styles.flex}>
                <div className={styles.image} data-aos="fade-right">   
                    <img src={CardInfo} alt="About Me" />
                </div>
                <div data-aos="fade-left">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
          </div>
        </div>
    );
}
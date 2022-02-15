import styles from './styles.module.scss'
import CardInfo from '../../assets/desktop-guy.svg'
import { useEffect, useState } from 'react';

interface Repository {
    name: string,
    bio: string
}

export function About(){

    const [ repository, setRepository ] = useState<Repository>()

    useEffect(() => {
    fetch('https://api.github.com/users/rodrigokovalski')
    .then(response => response.json())
    .then(data => setRepository(data))
   }, [])

   console.log(repository)

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
                    I've been studying WEB programming since 2018 but only got my first opportunity to work with it 2 years ago, therefore I still have a lot to learn in order to became the full stack engineer that I want to be. I'm very confident about my HTML5/CSS3 skills and I'm currently learning React.Js and Next.Js. I'm a very easy going person who is used to learn new things as I work on a way to solve new problems, so my lack of experience won't be a problem!
                    </p>
                </div>
            </div>
          </div>
        </div>
    );
}
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
                        {repository?.bio}
                    </p>
                </div>
            </div>
          </div>
        </div>
    );
}
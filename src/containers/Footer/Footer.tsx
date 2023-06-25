import folder from './img/folder.png';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container__personal}>
                    <div className={styles.container__contacts}>
                        <span className={styles.contacts__list}>
                            <img className={styles.contacts__folder} src={folder} alt="folder-pic" />
                            <a className={styles.contacts__link} href='https://t.me/NastyaVok'>Telegram</a>
                        </span>
                        <span className={styles.contacts__list}>
                            <img className={styles.contacts__folder} src={folder} alt="folder-pic" />
                            <a className={styles.contacts__link} href='https://github.com/NastyaVok'>GitHub</a>
                        </span>
                        <span className={styles.contacts__list}>
                            <img className={styles.contacts__folder} src={folder} alt="folder-pic" />
                            <a className={styles.contacts__link} href='https://career.habr.com/nastya-vok'>Resume</a>   
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
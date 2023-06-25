import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Платежи</h1>
            </div>
        </div>
    )
}

export default Header;
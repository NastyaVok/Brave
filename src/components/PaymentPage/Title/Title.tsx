import styles from './Title.module.css';

interface IOperators {
    operator: string
    img: string
};

const Title = ({img, operator}: IOperators) => {
    return (
    <div className={styles.wrapper}>
        <img className={styles.img} src={img} alt ={img}></img>
        <h4 className={styles.title}>{operator}</h4>
    </div>
    )
}

export default Title;
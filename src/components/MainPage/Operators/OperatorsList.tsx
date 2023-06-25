import { useNavigate } from 'react-router-dom';

import styles from './OperatorsList.module.css';

interface IOperators {
    operator: string
    img: string
};

const OperatorsList = ({operator, img}: IOperators) => {
    const navigate = useNavigate()

    const goToPaumentPage = () => {
        navigate('/PaymentPage', { state: { imgProp: img, operatorProp: operator } })
    }

    return (
        <li className={styles.item} onClick={e => goToPaumentPage()}>
            <img className={styles.img} src={img} alt ={img}></img>
            <h4 className={styles.title}>{operator}</h4>
        </li>
    )
}

export default OperatorsList;
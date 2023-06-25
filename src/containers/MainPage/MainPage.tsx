import { useState } from 'react'
import { operators } from '../../constants/operators';
import imgUnknown from './img/hide.png';
import OperatorsList from '../../components/MainPage/Operators/OperatorsList';

import styles from './MainPage.module.css';

interface IOperators {
    operator: string,
    img: string,
};

const MainPage = () => {
    const [operatorsList, setOperatorsList] = useState<IOperators[]>(operators.slice(0,3))
    const [inputValue, setInputValue] = useState<string>('')

    const changeValue = (e: string) => {
        setInputValue(e)
    }

    const findOperator = () => {
        let inputUppercase = inputValue.toLocaleUpperCase().trim()
        
        if (inputUppercase === '') return

        let existOperator = operators.find(({ img, operator }) => {
            let operatorUppercase = operator.toLocaleUpperCase().trim()

            if(inputUppercase === operatorUppercase) {
                let findExist = operatorsList.find(item => item.operator.toLocaleUpperCase().trim() === inputUppercase)

                if (findExist === undefined) { 
                    setOperatorsList([...operatorsList, {img, operator}])
                    return ' '
                }
            } 
        })
        if (existOperator === undefined) {
            let checkList = operatorsList.find(item => item.operator.toLocaleUpperCase().trim() === inputUppercase)
            if (checkList === undefined) { 
                setOperatorsList([...operatorsList, {img: imgUnknown, operator: inputValue}])
            }
        }
        setInputValue('')
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Для пополнения баланса выберите оператора</h1>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {operatorsList.map(({operator, img}) => {
                        return (
                            <OperatorsList operator={operator} img={img} key={operator}/>
                            )
                        })    
                    }
                </ul>
            </div>
            <div className={styles.wrapper__find}>
                <input className={styles.input} onChange={e => changeValue(e.target.value)} value={inputValue}></input>
                <button className={styles.btn} onClick={e => findOperator()}>Add new operator</button>
            </div>
        </div>
    )
}

export default MainPage;
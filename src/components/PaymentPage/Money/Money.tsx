import { Dispatch } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './Money.module.css';

interface PaymentForm {
    money: string,
    phone: string,
}

interface MoneyForm {
    name: 'money',
    moneyValue: string,
    setMoneyValue: Dispatch<React.SetStateAction<string>>,
    register: UseFormRegister<PaymentForm>,
}

const Money = ( {name, register, moneyValue, setMoneyValue} : MoneyForm ) => {

    const handleEdit = (inp: string) => {
        let num = inp.replace(/\D/g, '')
        if (Number(num) > 1000) return
        if (inp.startsWith('0')) num = inp.slice(1)
        setMoneyValue(num)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Введите сумму</h2>
            <input className={styles.input}
                {...register(name, {required: true})} 
                placeholder='не более 1000 рублей'
                value={moneyValue} 
                onChange={e => handleEdit(e.target.value)} 
            />
        </div>
    )
}

export default Money;
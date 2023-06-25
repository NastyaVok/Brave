import { Dispatch, ClipboardEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './Phone.module.css';

interface PaymentForm {
    money: string,
    phone: string,
}

interface PhoneForm {
    name: 'phone',
    phoneNumber: string,
    setPhoneNumber: Dispatch<React.SetStateAction<string>>,
    register: UseFormRegister<PaymentForm>,
}

const Phone = ( { name, register, phoneNumber, setPhoneNumber }: PhoneForm ) => {

    const handleEdit = (inp: string, selected: number | null) => {
        let num = inp.replace(/\D/g, '')
        let mask = ''

        if (!num) return setPhoneNumber('')
        
        if (inp.length != selected) {
            if (inp.match(/[a-zа-яё]/i)) {
                return setPhoneNumber(inp.replace(/\D/g, ''))
            }
            return setPhoneNumber(inp)
        }

        if (['7','8','9'].indexOf(num[0]) > -1) {
            if(num[0] === '9') num = `7${num}`

            let firstSymbol = (num[0] === '8') ? '8' : '+7'
            mask = `${firstSymbol} `

            if(num.length > 1) {
                mask += "(" + num.substring(1, 4)
            }
            if(num.length >= 5) {
                mask += ") " + num.substring(4, 7)
            }
            if(num.length >= 8) {
                mask += "-" + num.substring(7, 9)
            }
            if(num.length >= 10) {
                mask += "-" + num.substring(9, 11)
            }

        } else {
            mask = `+${num}`
        }
        
        setPhoneNumber(mask)
    }

    const deleteFirstSymbol = (code: string, value: string) => {
        if(code === 'Backspace' && (value === '8 ' || value === '+7 ')) {
         setPhoneNumber('')
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Введите номер телефона</h2>
            <input className={styles.input}
                {...register(name, {required: true})} 
                type='tel'
                placeholder='+7 (900) 800-80-80'
                value={phoneNumber} 
                onChange={e => handleEdit(e.target.value, e.target.selectionStart)} 
                onKeyDown={e => deleteFirstSymbol(e.code, e.currentTarget.value)}
            />
        </div>
    )
}

export default Phone;
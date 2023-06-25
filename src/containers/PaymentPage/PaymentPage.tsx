import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Title from '../../components/PaymentPage/Title/Title';
import Phone from '../../components/PaymentPage/Phone/Phone';
import Money from '../../components/PaymentPage/Money/Money';
import ModalPage from '../ModalPage/ModalPage';
import { delayPromise } from '../../utils/network';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './PaymentPage.module.css';

const schema = yup.object().shape({ 
    money: yup.string().required('money is required field'),
    phone: yup.string().required('phone is required field').min(18).max(18),
  });

interface PaymentForm {
    money: string,
    phone: string,
}

const PaymentPage = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const navigate = useNavigate()

    const location = useLocation()
    const { operatorProp, imgProp } = location.state

    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [moneyValue, setMoneyValue] = useState<string>('')

    const { register, handleSubmit, formState: { errors } } = useForm<PaymentForm>({
        resolver: yupResolver(schema),
      })

    const submit: SubmitHandler<PaymentForm> = ({money, phone}) => {
        console.log(money, phone)
        const data = {
            money,
            phone
        }
        
    delayPromise()
        .then((result) => {
            console.log(result);
            setSuccess(true)
            setModalActive(true)
        })
        .catch((error) => {
            console.error(error);
            setSuccess(false)
            setModalActive(true)
        });
    }

    const goBack = () => {
        navigate('/')
    }

    return (
        <div className={styles.wrapper}> 
            <div className={styles.container}>
                <Title operator={operatorProp} img={imgProp}/>
                <form className={styles.container__content} onSubmit={handleSubmit(submit)}>
                    <Phone 
                        name="phone"
                        register={register}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={({ message }) => <p className={styles.error}>{message}</p>}
                    />
                    <Money 
                        name="money"
                        register={register}
                        moneyValue={moneyValue}
                        setMoneyValue={setMoneyValue}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="money"
                        render={({ message }) => <p className={styles.error}>{message}</p>}
                    />
                    <div className={styles.container__btn}>
                        <button className={styles.btn} type='button' onClick={() => goBack()}>Выбрать оператора</button>
                        <button className={styles.btn}>Отправить</button>
                    </div>
                </form>
            </div> 
            <ModalPage active={modalActive} setActive={setModalActive} success={success} setSuccess={setSuccess} />
        </div>
    )
}

export default PaymentPage;
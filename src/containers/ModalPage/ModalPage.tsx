import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import cancelIcon from './img/cancel.png';
import successIcon from './img/success.png';
import unsuccessIcon from './img/unsuccess.png';
import styles from './ModalPage.module.css';

interface propsModal {
    active: boolean, 
    setActive: Dispatch<React.SetStateAction<boolean>>
    success: boolean, 
    setSuccess: Dispatch<React.SetStateAction<boolean>>
}

const ModalPage = ({active, setActive, success, setSuccess}: propsModal) => {
    const navigate = useNavigate()

    const goMainPage = () => {
        navigate('/')
    }

    return (
        <div className={active ? cn(styles.modal, styles.active) : styles.modal} onClick={() => setActive(false)}>
            <div className={active ? cn(styles.modal__content, styles.active__content) : styles.modal__content} onClick={e => e.stopPropagation()}>
                {success 
                    ?
                    <div className={styles.container__success}>
                        <h2 className={styles.title__success}>Форма успешно отправлена</h2>
                        <img className={styles.img__success} src={successIcon} alt='success'></img>
                        <button className={styles.btn__success} onClick={() => goMainPage()}>На главную</button>
                    </div>
                    :
                    <div className={styles.container__unsuccess}>
                        <div className={styles.container__title}>
                            <h2 className={styles.title__unsuccess}>Ошибка</h2>
                            <img className={styles.img__cancel} src={cancelIcon} alt='cancel' onClick={() => setActive(false)}></img>
                        </div>
                        <img className={styles.img__unsuccess} src={unsuccessIcon} alt='unsuccess'></img>
                        <button className={styles.btn__unsuccess} onClick={() => setActive(false)}>Закрыть</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ModalPage;
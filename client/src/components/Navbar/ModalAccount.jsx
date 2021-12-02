import React from "react";
import empty from '../../assets/images/empty.jpg';
import style from './ModalAccount.module.css';

function ModalAccount() {
    const onHover = () => {
        document.getElementsByClassName(style.modal)[0].classList.remove(style.modalHidden);
    }
    const onNotHover = () => {
        document.getElementsByClassName(style.modal)[0].classList.add(style.modalHidden);
    }
    return (
        <div className={style.container} onMouseLeave={onNotHover}>
            <img style={{background: 'white', borderRadius: '50%', border: '1px solid white'}} 
                src={empty} alt="" width='24px' className={style.image}
                onMouseOver={onHover}
                />
            <div className={`${style.modal} ${style.modalHidden}`}>
                <div>My Information</div>
                <div>Billing History</div>
                <div>Log Out<i style={{marginLeft: '5px'}} className="fas fa-sign-out-alt"></i></div>
            </div>
        </div>
    );
}

export default ModalAccount;
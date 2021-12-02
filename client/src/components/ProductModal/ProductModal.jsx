import React from "react";
import {useSpring, animated} from 'react-spring';
import style from './ProductModal.module.css';
import Nike1 from '../../assets/images/sneaker-transparent/nike-1.png';

function ProductModal({ showModal, setShowModal }) {

   
    const closeClick = () => {
        setShowModal(prev => !prev);
    }
    return(
        <div className={style.modal}>
            <div className={style.modal__wrapper}>
                <img className={style.modal__image} src={Nike1} alt="" />
                <div className={style.modal__content}>
                    <h1>Nike Shoe</h1>
                    <p>Make sport heritage come to life with the Nike Dunk Low By You.Choose from premium leathers—including a special basketball-pebbled option—and suedes inspired by the Dunk's archival vault. Accent your foundation with classic varsity colours for a tribute to basketball history.</p>
                    <button>Add to bag</button>
                </div>
                <i className={`${style.modal__close} far fa-times-circle`} onClick={closeClick}></i>
            </div>
        </div>
    );
};


export default ProductModal;
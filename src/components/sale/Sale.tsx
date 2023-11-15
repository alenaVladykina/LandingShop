import React from 'react';
import s from './sale.module.css'
import img from '../../images/image/promo.png'

export const Sale = () => {
  return (
    <>
      <div id='sale'
           className={s.sale}>
        <div className={s.sale_content}>
          <div className={s.title}>
            <span className={s.title_highlight}>PAYDAY </span>
            <span>SALE NOW</span>
          </div>
          <p className={s.subtitle}>Spend minimal $100 get 30% off voucher code for your next purchase</p>
          <p className={s.subtitle_date}>1 June - 10 June 2021</p>
          <p className={s.subtitle_terms}>*Terms & Conditions apply</p>
          <button type={'button'} className={s.sale_btn}>SHOP NOW</button>
        </div>
      </div>
      <img src={img} alt={''} className={s.image}/>
    </>
  );
};


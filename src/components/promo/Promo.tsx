import React from 'react';
import s from './promo.module.css'
import '../../utils/styles/common.css'
import '../../utils/styles/common.css'
import image from '../../images/image/header-img.jpg'

export const Promo = () => {
  return (
    <section className={s.promo}>
      <div className='container'>
        <div className={s.promo_content}>
          <div className={s.promo_title}>
            <span className={s.highlight}>
              <span>LET’S </span>
             </span>
            <span>EXPLORE </span>
            <span className={s.highlight__yellow}>
              <span>UNIQUE </span>
            </span>
            <span>CLOTHES.</span>
            <div className={s.promo_subtitle}>
              Live for Influential and Innovative fashion!
            </div>
            <div className={s.promo__wrapper__btn}>
              <button type={"button"} className={s.promo__btn}>Shop Now</button>
            </div>
          </div>

        </div>
        <div className={s.promo_img}>
          <img src={image}/>
        </div>
      </div>
    </section>
  );
};


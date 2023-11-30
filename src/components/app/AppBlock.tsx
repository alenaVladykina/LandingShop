import React from 'react';
import s from './appBlock.module.css'
import '../../utils/styles/common.css'
import vouchers from '../../images/image/vouchers-img.png'
import appStore from '../../images/icons/app-store.png'
import googlePlay from '../../images/icons/google-play.png'

export const AppBlock = () => {
  return (
    <section className={s.appBlock}>
      <div className="container">
        <div className={s.appBlock_container}>
          <div className={s.appBlock_content}>
            <h2 className={s.title}>DOWNLOAD APP & GET THE VOUCHER!</h2>
            <p className={s.subtitle}>
              Get 30% off for first transaction using
              Rondo vision mobile app for now.
            </p>
            <div className={s.appBlock_btn}>
              <a href={'#'}><img src={appStore} alt={''}/></a>
              <a href={'#'}><img src={googlePlay} alt={''}/></a>
            </div>
          </div>
          <div className={s.appBlock_img}>
            <img alt='image' src={vouchers}/>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import s from './subscription.module.css'


export const Subscription = () => {
  return (

    <section id='signUp'
             className={s.subscription}>
      <div className='container'>
        <div className={s.subscription_wrapper}>
          <h2 className={s.title}>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
          <p className={s.subtitle}>Type your email down below and be young wild generation</p>
          <form className={s.subscription_container}>
            <input placeholder={'Add your email here'} type={'input'} className={s.container_input}/>
            <button type={'submit'} className={s.container_button}>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};


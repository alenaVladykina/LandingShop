import React from 'react';
import s from './brands.module.css'
import hm from '../../images/brands/HM.svg'
import obey from '../../images/brands/Obey.svg'
import shopify from '../../images/brands/Shopify.svg'
import lacoste from '../../images/brands/Lacoste.svg'
import levis from '../../images/brands/Levis.svg'
import amazon from '../../images/brands/Amazon.svg'

export const Brands = () => {
  return (
    <div id='catalogue'
      className={s.brands}>
      <div className="container">
        <div className={s.brands_wrapper}>
          <img className={s.brand} src={hm} alt={'icon brand hm'}/>
          <img className={s.brand} src={obey} alt={'icon brand obey'}/>
          <img className={s.brand} src={shopify} alt={'icon brand shopify'}/>
          <img className={s.brand_lacoste} src={lacoste} alt={'icon brand lacoste'}/>
          <img className={s.brand} src={levis} alt={'icon brand levis'}/>
          <img className={s.brand} src={amazon} alt={'icon brand amazon'}/>
        </div>
      </div>
    </div>
  );
};


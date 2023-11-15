import React from 'react';
import s from './footer.module.css'
import '../../utils/styles/common.css'
import facebook from '../../images/socials/fb.svg'
import instagram from '../../images/socials/inst.svg'
import twitter from '../../images/socials/tw.svg'
import linkedIn from '../../images/socials/in.svg'

export const Footer = () => {


  return (
    <div className={s.footer}>
      <div className={'container'}>
        <div className={s.footer_container}>
          <div className={s.header}>
            <h2 className={s.title}>FASHION</h2>
            <p>Complete your style with awesome clothes from us.</p>
            <div className={s.icons}>
              <a><img alt={'icon facebook'} src={facebook}/></a>
              <a><img alt={'icon instagram'} src={instagram}/></a>
              <a><img alt={'icon twitter'} src={twitter}/></a>
              <a><img alt={'icon instagram'} src={linkedIn}/></a>
            </div>
          </div>
          <div className={s.footer_menu}>
            <div className={s.company}>
              <a className={s.subtitle} href={'#'}>Company</a>
              <a href={'#'}>About</a>
              <a href={'#'}>Contact us</a>
              <a href={'#'}>Support</a>
              <a href={'#'}>Careers</a>
            </div>
            <div className={s.quick}>
              <a className={s.subtitle} href={'#'}>Quick Link</a>
              <a href={'#'}>Share Location</a>
              <a href={'#'}>Orders Tracking</a>
              <a href={'#'}>Size Guide</a>
              <a href={'#'}>FAQs</a>
            </div>
            <div className={s.legal}>
              <a href={'#'} className={s.subtitle}>Legal</a>
              <a href={'#'}>Terms & conditions</a>
              <a href={'#'}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


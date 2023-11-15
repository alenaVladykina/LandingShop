import React, {useEffect, useState} from 'react';
import s from './header.module.css'
import '../../utils/styles/common.css'
import logo from '../header/../../images/icons/logo.svg'
import {scrollLook} from "../../utils/scrollLook";


export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)


  useEffect(() => {
    open ? scrollLook(true) : scrollLook(false)
  }, [open])

  const Logo = () => {
    return (
      <div className={s.header_logo}>
        <img src={logo} alt='Logo'/>
        <span>Fashion</span>
      </div>
    )
  }

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const classOpen = open ? s.header_nav_open : s.header_nav

  const onClickCloseModal = (e: any) => {
    console.log(e)
    setOpen(false)
  }
  return (
    <header className={s.header}>
      <nav className="container">
        <div className={s.header_row}>
          {!open && <Logo/>}
          <div onClick={onOpen}
               className={s.burgerIcon}/>
          <div className={classOpen}>
            <div onClick={onClose}
                 className={s.close_modal}/>
            <ul onClick={onClickCloseModal}>
              {open && <Logo/>}
              <li><a href='#catalogue'>CATALOGUE</a></li>
              <li><a href={'#fashion'}>FASHION</a></li>
              <li><a href={'#favourite'}>FAVOURITE</a></li>
              <li><a href={'#sale'}>SALE</a></li>
              <li><a href={'#signUp'} className={s.header_nav_button}>SIGN UP</a></li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};


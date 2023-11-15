import React, {useEffect, useState} from 'react';
import s from './arrivals.module.css'
import {Card} from "../card/Card";
import cat1 from '../../images/categories/cat-01.jpg'
import cat2 from '../../images/categories/cat-02.jpg'
import cat3 from '../../images/categories/cat-03.jpg'
import {useRef} from "react";


export type CardType = {
  title: string
  subtitle: string
  img: string
  alt: string
  id: number
}


export type StringType = 'next' | 'previous'
export const Arrivals = () => {

    const [click, setClick] = useState<number>(0)


    const cards: CardType[] = [
      {img: cat1, title: 'Hoodies & Sweatshirt', subtitle: 'Explore Now!', alt: '', id: 1},
      {img: cat2, title: 'Coats & Parkas', subtitle: 'Explore Now!', alt: '', id: 2},
      {img: cat3, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 3},
      {img: cat1, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 4},
      {img: cat2, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 6},
      {img: cat3, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 7},
      {img: cat1, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 8},
      {img: cat2, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 9},
      {img: cat3, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 10},
      {img: cat1, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 11},
      {img: cat2, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 12},
      {img: cat3, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 13},
      {img: cat1, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 14},
      {img: cat2, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 15},
      {img: cat3, title: 'Tees & T-Shirt', subtitle: 'Explore Now!', alt: '', id: 16},
    ]

    const ref = useRef<any>(null)
    console.log(typeof ref)


    useEffect(() => {
      const widthContainer = ref.current.offsetWidth
      const widthChild = ref.current.firstChild.offsetWidth
      const children = Math.round(widthContainer / widthChild)
      //размер дочернего элемента
      const clickContainer = (widthChild * children)
      const maxClick = ref.current.children.length / children
      if (click >= 0 && click < maxClick) {
        ref.current.style.left = -(click * clickContainer) + 'px'
      }
      if (click >= maxClick || click < -1) {
        setClick(0)
        ref.current.style.left = 0 + 'px'
      }
    }, [click])


    const onClickHandlerNext = () => {
      setClick(click + 1)
    }

    const onClickHandlerPrevious = () => {
      const newClick = click - 1
      setClick(newClick)
    }


    return (
      <div id={'fashion'}
           className={s.arrivals}>
        <div className="container">
          <h1 className={s.arrivals_header}>NEW ARRIVALS</h1>
          <div className={s.slider}>
            {click !== 0 && <button onClick={onClickHandlerPrevious}
                                    className={s.buttonSliderBack}/>}
            <div ref={ref} className={s.slider_line}>
              {
                cards.map(el => {
                  return (
                    <Card
                      key={el.id}
                      className={s.card}
                      img={el.img}
                      title={el.title}
                      subtitle={el.subtitle}
                      alt={el.alt}/>
                  )
                })
              }
            </div>
            <button
              onClick={onClickHandlerNext}
              className={s.buttonSliderNext}/>
          </div>
        </div>
      </div>
    );
  }
;


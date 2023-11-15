import React from 'react';
import s from './favourite.module.css'
import {Card} from "../card/Card";
import {CardType} from "../arrivals/Arrivals";
import promo01 from '../../images/image/promo-01.jpg'
import promo02 from '../../images/image/promo-02.jpg'
import '../../utils/styles/common.css'


export const Favourite = () => {

  const cards: CardType[] = [
    {img: promo01, title: 'Trending on instagram', subtitle: 'Explore Now!', alt: '', id: 1},
    {img: promo02, title: 'All Under $40', subtitle: 'Explore Now!', alt: '', id: 2},
  ]

  return (
    <section id='favourite'
             className={s.favourite}>
      <div className={'container'}>
        <h2 className={s.title}>Young’s Favourite</h2>
        <div className={s.favourite_cards_wrapper}>
          {cards.map((el, index) => {
            return (
              <Card key={index}
                    img={el.img}
                    title={el.title}
                    subtitle={el.subtitle}
                    alt={el.alt}
                    className={s.card}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}



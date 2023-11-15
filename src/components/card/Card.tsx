import React from 'react';
import s from './card.module.css'


type CardPropsType = {
  title: string
  subtitle: string
  img: string
  alt: string
  className?: string
}


export const Card: React.FC<CardPropsType> = ({title, subtitle, img, alt, className}) => {
  // const className = style === 'arrivals' ? s.image_arrivals : s.image_favourite
  return (
    <div className={className}>
      <img className={s.image_arrivals} src={img} alt={alt}/>
      <p className={s.title}>{title}</p>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  );
};


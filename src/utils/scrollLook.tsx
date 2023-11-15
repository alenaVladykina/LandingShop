import React from 'react'

export function scrollLook(value: boolean) {
  if (value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}




import React from 'react'
import { ReactComponent as Star } from '../../assets/star.svg'
import './styles.scss'

export default function Rating ({ rating, max = 5 }) {
  const stars = []

  for (let i = 1; i <= max; i++) {
    stars.push(<Star />)
  }

  return (
    <div className='rating'>
      {stars.map((star, i) => (
        <div className='rating__point' key={i}>
          {star}
        </div>
      ))}
    </div>
  )
}

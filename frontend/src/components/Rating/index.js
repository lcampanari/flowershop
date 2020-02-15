import classNames from 'classnames'
import React from 'react'
import { ReactComponent as StarOriginal } from '../../assets/star.svg'
import './styles.scss'

function Star () {
  return <StarOriginal fill='currentColor' />
}

export default function Rating ({ rating, max = 5 }) {
  const stars = []
  const starFull = Math.floor(rating)
  const starPart = rating - starFull

  for (let i = 1; i <= max; i++) {
    let star
    // full stars
    if (i <= starFull) {
      star = {
        type: 'full',
        elem: <Star />
      }
      // partial stars
    } else if (starPart && i > starFull + starPart && i <= starFull + 1) {
      star = {
        type: 'partial',
        elem: (
          <>
            <div
              className='rating__partial'
              style={{ width: `${starPart * 100}%` }}
            >
              <Star />
            </div>
            <Star />
          </>
        )
      }
      // grey stars
    } else {
      star = {
        type: 'empty',
        elem: <Star />
      }
    }
    stars.push(star)
  }

  return (
    <div className='rating'>
      {stars.map((star, i) => (
        <div
          className={classNames('rating__star', {
            'rating__star--threshold':
              star.type === 'full' &&
              stars[i + 1] &&
              stars[i + 1].type !== 'full'
          })}
          key={i}
        >
          {star.elem}
        </div>
      ))}
    </div>
  )
}

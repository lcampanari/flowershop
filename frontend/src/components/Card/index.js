import classNames from 'classnames'
import React from 'react'
import './styles.scss'

export default function Card ({ children, className, ...props }) {
  let classes = className || null
  return (
    <div className={classNames('card', classes)} {...props}>
      {children}
    </div>
  )
}

Card.Body = function CardBody ({ classes, children, ...props }) {
  return (
    <div className={classNames('card__body', classes)} {...props}>
      {children}
    </div>
  )
}

Card.Separator = function CardSeparator ({ classes, ...props }) {
  return (
    <div className={classNames('card__separator', classes)} {...props}></div>
  )
}

Card.Footer = function CardFooter ({ classes, children, ...props }) {
  return (
    <div className={classNames('card__footer', classes)} {...props}>
      {children}
    </div>
  )
}

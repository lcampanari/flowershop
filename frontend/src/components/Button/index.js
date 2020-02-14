import classNames from 'classnames'
import React from 'react'
import './styles.scss'

export default function Button ({
  children,
  className,
  type = 'success',
  ...props
}) {
  return (
    <button
      className={classNames('btn', className, { [`btn--${type}`]: true })}
      {...props}
    >
      {children}
    </button>
  )
}

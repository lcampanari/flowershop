import React from 'react'
import { CartProvider } from '../../context/CartContext'
import ProductsList from './ProductsList'
import './styles.scss'

export default function Store () {
  return (
    <CartProvider>
      <ProductsList />
    </CartProvider>
  )
}

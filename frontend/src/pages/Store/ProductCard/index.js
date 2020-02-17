import React, { useContext, useState } from 'react'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Rating from '../../../components/Rating'
import CartContext from '../../../context/CartContext'
import InCartBadge from './InCartBadge'
import './styles.scss'

export default function ProductCard ({ product }) {
  const [cart, setCart] = useContext(CartContext)
  const [onCart, setOnCart] = useState(false)

  function addToCart () {
    setCart(cart => [...cart, product])
    setOnCart(true)
  }

  function removeFromCart () {
    const updatedCart = cart.filter(item => item.id !== product.id)
    setCart(updatedCart)
    setOnCart(false)
  }

  return (
    <>
      {console.log(cart)}

      <Card
        className='product-card'
        onClick={onCart ? removeFromCart : addToCart}
      >
        {onCart && <InCartBadge />}
        <Card.Body>
          <img src={product.thumbnail_url} alt={product.name} />
          <div className='product-card__overlay'>
            {onCart ? (
              <Button>Remove from cart</Button>
            ) : (
              <Button>Add to cart</Button>
            )}
          </div>
        </Card.Body>
        <Card.Separator />
        <Card.Footer>
          <div className='product-card__name'>{product.name}</div>
          <div className='product-card__price'>${product.price}</div>
          <div className='product-card__rating'>
            <Rating rating={product.rating} />
          </div>
        </Card.Footer>
      </Card>
    </>
  )
}

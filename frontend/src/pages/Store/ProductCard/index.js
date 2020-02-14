import React from 'react'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Rating from '../../../components/Rating'
import './styles.scss'

export default function ProductCard ({ product }) {
  return (
    <>
      <Card className='product-card'>
        <Card.Body>
          <img src={product.thumbnail_url} alt={product.name} />
          <div className='product-card__overlay'>
            <Button>Add to cart</Button>
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

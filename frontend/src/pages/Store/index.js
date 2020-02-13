import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Store () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function loadProducts () {
      const res = await api.get('/products')
      setProducts(res.data)
    }

    loadProducts()
  }, [])

  return (
    <>
      <div className='products-list'>
        {products.map(product => (
          <div className='product-card' key={product.id}>
            <div>
              {product.name}: ${product.price}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import ProductCard from '../ProductCard'
import './styles.scss'

export default function ProductsList () {
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts () {
      const res = await api.get('/products')
      setProducts(res.data)
      setLoadingProducts(false)
    }

    loadProducts()
  }, [])

  return loadingProducts ? (
    <>loading...</>
  ) : (
    <>
      <div className='products'>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

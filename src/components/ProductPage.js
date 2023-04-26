import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import ApiHelper from './ApiHelper'
import Rating from './Rating'

export default function ProductPage(props) {

  let { id } = useParams()
  const api = new ApiHelper()
  const [product, setProduct] = useState({ rating: { rate: '', count: '' } })

  useEffect(() => {
    api.getProductById(id)
      .then(data => {
        setProduct(data)
      })
  }, [])

  return (
    <div className='container row'>
      <h3></h3>
      <div className='col s12 m4'>
        <img src={product.image} width={'100%'} alt='image' />
      </div>
      <div className='col s12 m8'>
        <h4>{product.title}</h4>
        <p style={{ fontSize: '18px' }}>{product.description}</p>
        <h5>${product.price}</h5>
        <Rating rating={product.rating} />
      </div>
    </div>
  )
}


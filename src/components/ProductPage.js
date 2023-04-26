import React, { useState } from 'react'
import { json, useParams } from 'react-router-dom'
import ApiHelper from './ApiHelper'
import Rating from './Rating'

export default function ProductPage(props) {
  const [i, setI] = useState(0)
  let { id } = useParams()
  const api = new ApiHelper()
  const [product, setProduct] = useState({ rating: { rate: '', count: '' } })
  if (i == 0) {
    api.getProductById(id).then(data => {
      setI(i + 1)
      setProduct(data)
      console.log(data)
    })
  }
  return (
    <div className='container row'>
      <h3></h3>
      <div className='col s12 m4'>
        <img src={product.image} width={'100%'} />
      </div>
      <div className='col s12 m8'>
        <h4>{product.title}</h4>
        <p style={{fontSize: '18px'}}>{product.description}</p>
        <h5>${product.price}</h5>
        <Rating rating={product.rating}/>
      </div>
    </div>
  )
}


import React, { useState } from 'react'
import { json, useParams } from 'react-router-dom'
import ApiHelper from './ApiHelper'
import './productPage.css'

export default function ProductPage(props) {
  const [i, setI] = useState(0)
  let { id } = useParams()
  const api = new ApiHelper()
  const [product, setProduct] = useState({rating:{rate:'', count: ''}})
  if (i == 0) {
    api.getProductById(id).then(data => {
      setI(i + 1)
      setProduct(data)
      console.log(data)
    })
  }
  return (
    <div className='container row'>
      <h3>ProductPage</h3>
      <div className='col s12 m4'>
        <img src={product.image} width={'100%'}/>
      </div>
      <div className='col s12 m8'>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <h5>${product.price}</h5>
        {/* <h5>Rate: {product.rating.rate} {product.rating.count}</h5> */}
        <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <span key={i} >
            <input type="radio" name="rating" value={ratingValue} />
            <label className={ratingValue <= product.rating.rate ? 'checked' : ''}>★</label>
          </span>
        );
      })}
      <span> {product.rating.count}</span>
    </div>
      </div>
      
    </div>
  )
}


import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
    let {id} = useParams()
  return (
    <div>ProductPage {id}</div>
  )
}


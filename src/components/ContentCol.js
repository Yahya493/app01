import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class ContentCol extends Component {
    render() {
        let colSize = 12 / this.props.nbCol
        return (
            <div className={'col s' + colSize}>
                {this.props.data.map(val => {
                    return (
                        <ProductCard key={val.id} data={val} />
                    )
                })}
            </div>
        )
    }
}

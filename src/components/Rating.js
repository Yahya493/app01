import React, { Component } from 'react'
import './ratingStyle.css'

export default class Rating extends Component {
    render() {
        return (
            <div>
                {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                        <span key={i} >
                            <input type="radio" name="rating" value={ratingValue} />
                            <label className={ratingValue <= this.props.rating.rate ? 'checked' : ''}>★</label>
                        </span>
                    );
                })}
                <span> {this.props.rating.count}</span>
            </div>
        )
    }
}

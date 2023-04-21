import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        data: {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {
        return (
            <div className="card ">
                <div className="card-image waves-effect waves-block waves-light" style={{ padding: 10 }}>
                    <img className="activator" src={this.state.data.image} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 "><i className="material-icons right">more_vert</i>{this.state.data.title}</span>
                    <p><Link to='#'>This is a link</Link></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i>{this.state.data.title}</span>
                    <p>{this.state.data.description}</p>
                </div>
            </div>
        )
    }
}

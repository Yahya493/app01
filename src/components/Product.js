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
            <div className="card" style={{ height: "450px", padding: "10px", }}>
                <div className="valign-wrapper " style={{ height: "50%", justifyContent: "center" }}>
                    <img className=" activator " src={this.state.data.image} style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </div>
                <div className="" style={{ height: "40%", }}>
                    <span className="card-title activator grey-text text-darken-4 " style={{ fontSize: "16px", fontWeight: "bold" }}>{this.state.data.title}</span>
                    <p><Link to='#' >This is a link</Link></p>
                </div>
                <div className="card-reveal" style={{padding: "10px", }}>
                    <span className="card-title grey-text text-darken-4" style={{ fontSize: "16px", fontWeight: "bold" }}><i className="material-icons right " >close</i><br />{this.state.data.title}</span>
                    <p>{this.state.data.description}</p>
                </div>
            </div>
        )
    }
}

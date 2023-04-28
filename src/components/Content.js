import React, { Component } from 'react'
import ApiHelper from './ApiHelper'
import ContentCol from './ContentCol'
import Product from './ProductCard'

export default class Content extends Component {
    state = {
        data: [],
        // cols: [],
        nbCol: 1,
        filter: {
            categories: []
        }
    }

    applyFilter(data) {
        return data.filter(value => {
            return this.props.filter.categories.includes(value.category)})
    }

    applySearch() {
        return this.state.data.filter(value => {
            return value.title.toLowerCase().includes(this.props.searchQuery.toLowerCase())})
    }

    componentDidMount() {
        this.props.api.getData().then(data=>this.setState({
            data: data,
            filter: this.props.filter
        },handleResize))

        const handleResize = () => {

            let colNb = 1
            if (window.innerWidth > 1200) colNb = 4
            else if (window.innerWidth > 800) colNb = 3
            else if (window.innerWidth > 400) colNb = 2
            else colNb = 1
            this.setState({
                nbCol: colNb,
            })
        }
        
        window.addEventListener('resize', handleResize)
    }

    arrangeCol = (nbCol) => {
        // let filteredData = this.applyFilter(this.state.data)
        let filteredData = this.applyFilter(this.applySearch())

        let cols = []
        for (let i = 0; i < nbCol; i++) {
            cols.push(<ContentCol key={Math.random()} nbCol={nbCol} data={filteredData.filter(val => filteredData.indexOf(val) % nbCol === i)} />)
        }
        return cols
    }

    render() {
        
        return (
            <div id='Content' >
                {this.arrangeCol(this.state.nbCol)}
            </div>
        )
    }
}

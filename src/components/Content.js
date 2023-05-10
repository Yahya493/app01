import React, { Component } from 'react'
import ContentCol from './ContentCol'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        filters: state.filters,
        data: state.data,
        searchQuery: state.searchQuery
    }
}

export default connect(mapStateToProps)(class Content extends Component {
    state = {
        nbCol: 1,
    }

    applyFilter(data) {
        return data.filter(value => {
            return this.props.filters.categories.includes(value.category)
        })
    }

    applySearch() {
        return this.props.data.filter(value => {
            return value.title.toLowerCase().includes(this.props.searchQuery.toLowerCase())
        })
    }

    componentDidMount() {

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

        handleResize()
        window.addEventListener('resize', handleResize)
    }

    arrangeCol = (nbCol) => {
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
})

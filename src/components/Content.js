import React, { Component } from 'react'
import ContentCol from './ContentCol'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        filters: state.filters,
        data: state.data
    }
}

export default connect(mapStateToProps)(class Content extends Component {
    state = {
        // data: [],
        nbCol: 1,
        filter: {
            categories: []
        }
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
        // this.props.api.getData().then(data => this.setState({
        //     data: data,
        // }, handleResize))
        this.setState({
            filter: this.props.filter
        })

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

    // componentDidUpdate(preProps) {
    //     if(preProps !== this.props)
    //         this.forceUpdate()
    // }

    arrangeCol = (nbCol) => {
        let filteredData = this.applyFilter(this.applySearch())
        // console.log(this.props.filters.categories)

        let cols = []
        for (let i = 0; i < nbCol; i++) {
            cols.push(<ContentCol key={Math.random()} nbCol={nbCol} data={filteredData.filter(val => filteredData.indexOf(val) % nbCol === i)} />)
        }
        return cols
    }
     i = 0
    render() {
        console.log(this.i++)
        return (
            <div id='Content' >
                {this.props.filters.categories}
                {this.arrangeCol(this.state.nbCol)}
            </div>
        )
    }
})

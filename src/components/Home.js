import React, { Component } from 'react'
import Content from './Content'
import SidePanel from './SidePanel'

export default class Home extends Component {
    state = {
        filter: {
            categories: []
        }
    }

    handleFilter = (props) => {
        let filter = this.state.filter
        filter.categories = props.categories
        this.setState({
            filter: filter
        },)
    }

    render() {
        return (
            <div className="row">
                <div className="col s3 l2 hide-on-small-only" >
                    <SidePanel api={this.props.apiHelper} categoriesFilter={this.handleFilter} />
                </div>
                <div className="col s12 m9 l10">
                    <Content api={this.props.apiHelper} filter={this.state.filter} />
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'
import Content from './Content'
import SidePanel from './SidePanel'

export default class Home extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s3 l2 hide-on-small-only" >
                    <SidePanel />
                </div>
                <div className="col s12 m9 l10">
                    <Content searchQuery={this.props.searchQuery}/>
                </div>

            </div>
        )
    }
}

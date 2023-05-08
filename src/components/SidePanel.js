import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    categories: state.filters.categories,
    categoriesName: state.filters.categoriesName
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCategories: (categories) => {
      dispatch({ type: 'setCategories', categories: categories })
    },
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(class SidePanel extends Component {
  state = {
    isLoaded: false,
    categoriesName: [],
    categories: []
  }

  componentDidMount() {
    this.setState({
      isLoaded: false
    })
  }

  componentDidUpdate() {

    if (!this.state.isLoaded && this.props.categories.length !== 0 ) {
      let i = 0
      this.setState({
        categories: this.props.categoriesName
          .map(cat => { return { id: i++, name: cat, checked: this.props.categories.includes(cat) } }),
          isLoaded: true
      }, this.applyFilter)
    }
  }

  handleCheckbox = (e) => {
    let target = this.state.categories[e.target.value]
    target.checked = !target.checked

    if (e.target.value == 0) {
      this.state.categories.forEach(element => {
        element.checked = target.checked
      });
    }
    else {
      this.state.categories[0].checked = false
    }

    this.setState({ categories: this.state.categories },
      this.applyFilter
    )
  }

  applyFilter = () => {
    ///
    this.props.setCategories(this.state.categories.map(val => {
      if (val.checked) return val.name
    }))
  }

  render() {
    return (
      <div id='SidePanel' style={{ position: "fixed" }}>

        <h6>Category</h6>
        <ul style={{ paddingLeft: 20 }}>
          {this.state.categories.map(val => {
            return <li key={Math.random()}>
              <label className='checkbox'>
                <input type='checkbox' value={val.id} checked={val.checked} onChange={this.handleCheckbox} />
                <span style={{ color: 'black' }}>
                  {val.name}
                </span>
              </label>
            </li>
          })}
        </ul>
      </div>
    )
  }
})

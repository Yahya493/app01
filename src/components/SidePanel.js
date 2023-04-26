import React, { Component } from 'react'
import ApiHelper from './ApiHelper'

export default class SidePanel extends Component {
  state = {
    categories: []
  }

  componentDidMount(props) {

    this.props.api.getData().then(data => {
      let catList = data.map(val => val.category)
      catList = catList.filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      catList = ["All", ...catList.sort()]
      let i = 0
      this.setState({
        categories: catList
          .map(cat => { return { id: i++, name: cat, checked: true } })
      }, this.applyFilter)
    })
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
    this.props.categoriesFilter({
      categories: this.state.categories.map(val => {
        if (val.checked) return val.name
      })
    })
  }

  render() {
    return (
      <div id='SidePanel' style={{ position:"fixed"}}>
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
          }
          )}
        </ul>
      </div>
    )
  }
}

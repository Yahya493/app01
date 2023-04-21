import { Component } from "react";
import ApiHelper from "./components/ApiHelper";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import SidePanel from "./components/SidePanel";

class App extends Component {
  apiHelper = new ApiHelper()

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
    }, )
  }

  render() {
    return (
      <div className="App ">
        <div className="navbar-fixed">
          <NavBar />
        </div>
        <div className="row">
          <div className="col s3 l2 hide-on-small-only" >
            <SidePanel api={this.apiHelper} categoriesFilter={this.handleFilter}/>
          </div>
          <div className="col s12 m9 l10">
            <Content api={this.apiHelper} filter={this.state.filter} />
          </div>

        </div>
      </div>
    )
  }
}

export default App;


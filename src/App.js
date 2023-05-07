import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ApiHelper from "./components/ApiHelper";
import Content from "./components/Content";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ProductPage from "./components/ProductPage";
import { connect } from "react-redux";

class App extends Component {
  apiHelper = new ApiHelper()

  state = {
    searchQuery: ''
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query
    })
  }


  componentDidMount() {
    this.props.init()
  }

  // componentDidUpdate(preProps) {
  //   if(preProps !== this.props) this.forceUpdate()
  // }

  render() {
    return (
      <div className="App ">
        <div className="navbar-fixed">
          <NavBar handleSearch={this.handleSearch}/>
        </div>
        <Routes >
            <Route path="/" element={<Home apiHelper={this.apiHelper} searchQuery={this.state.searchQuery}/> } />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    init: () => { dispatch({ type: 'init' }) }
  })
}

export default connect(null,mapDispatchToProps)(App);


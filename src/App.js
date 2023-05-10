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

  // state = {
  //   searchQuery: ''
  // }

  // handleSearch = (query) => {
  //   this.setState({
  //     searchQuery: query
  //   })
  // }

  componentDidMount() {
    const api = new ApiHelper()
    api.getData().then(data => {
      let catList = data.map(val => val.category)
      catList = catList.filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      catList = ["All", ...catList.sort()]
      this.props.init(data, catList)
    })
  }

  render() {
    return (
      <div className="App ">
        <div className="navbar-fixed">
          <NavBar handleSearch={this.handleSearch} />
        </div>
        <Routes >
          <Route path="/" element={<Home /*searchQuery={this.state.searchQuery}*/ />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    init: (data, categories) => { dispatch({ type: 'init', data:data, categories:categories}) }
  })
}

export default connect(null, mapDispatchToProps)(App);


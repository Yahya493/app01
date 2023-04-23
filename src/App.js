import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ApiHelper from "./components/ApiHelper";
import Content from "./components/Content";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ProductPage from "./components/ProductPage";
import SidePanel from "./components/SidePanel";

class App extends Component {
  apiHelper = new ApiHelper()

  

  render() {
    return (
      <div className="App ">
        <div className="navbar-fixed">
          <NavBar />
        </div>
        <Routes >
            <Route path="/" element={<Home apiHelper={this.apiHelper}/> } />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

export default App;


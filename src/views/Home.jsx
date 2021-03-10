import React, { Component } from 'react'
import Header from '../components/header/Header.jsx'
import Product from '../components/product/Product.jsx'
import {connect} from 'react-redux'
import {getProduct} from '../redux/action'

class Home extends Component {
  componentDidMount() {
    this.props.getProduct()
  }
  render() {
    return (
      <div>
        <Header />
        <Product />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getProduct: () => dispatch(getProduct())
  }
}

export default connect(null, mapDispatchToProps)(Home)
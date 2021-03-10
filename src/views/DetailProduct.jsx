import React, { Component } from 'react'
import Header from '../components/header/Header.jsx'
import Detail from '../components/detail-product/Detail.jsx'
import {connect} from 'react-redux'
import {detailProduct} from '../redux/action'


class DetailProduct extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.detailProduct(id)
  }
  render() {
    return (
      <div>
        <Header />
        <Detail />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    detailProduct: (id) => dispatch(detailProduct(id))
  }
}

export default connect(null, mapDispatchToProps)(DetailProduct)
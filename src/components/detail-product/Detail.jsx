import React from 'react'
import './Detail.css'
import { useSelector } from 'react-redux'

function Detail() {
  const detailProduct = useSelector(state => state.product.detailProduct)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="image-product">
            <img src={detailProduct.imgUrl} alt="imageproduct" />
          </div>
        </div>

        <div className="col-lg-7">
          <div className="description-box">
            <div className="product-name">
              {detailProduct.title}
            </div>

            <div className="product-price">
              <div className="price-text">HARGA</div>
              <div className="price">{detailProduct.price}</div>
            </div>

            <div className="product-variant">
              <div className="color-text">WARNA</div>
              <div className="variant-option">
                <div className="variant-text">Pilih Variant</div>
                <div className="variant">Random Color</div>
              </div>
            </div>

            <div className="product-size">
              <div className="size-text">UKURAN</div>
              <div className="variant-option">
                <div className="variant-text">Pilih Variant</div>
                <div className="variant">Random Size</div>
              </div>
            </div>

            <div className="toCart">
              <button className="btn btn-warning">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

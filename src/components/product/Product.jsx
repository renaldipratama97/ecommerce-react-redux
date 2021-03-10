import React from 'react'
import './Product.css';
import { Container, Row, Col, Card, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faStoreAlt, faUser, faClipboardList, faStar } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


function Product() {
  const product = useSelector(state => state.product.dataProducts)
  const history = useHistory()
  function goDetailProduct (id) {
    history.push(`/detail-product/${id}`)
  }
  return (
    <Container>
      <Row style={{ height: "80px" }}>
        <Col lg={12}>
          <div className="breadcrumbs-icon d-flex">
            <div className="icon active">
              <FontAwesomeIcon icon={faArchive} /> Produk
                    </div>
            <div className="icon">
              <FontAwesomeIcon icon={faStoreAlt} /> Toko
                    </div>
            <div className="icon">
              <FontAwesomeIcon icon={faUser} /> Profil
                    </div>
            <div className="icon">
              <FontAwesomeIcon icon={faClipboardList} /> Katalog
                    </div>
          </div>
          <div className="black-line"></div>
          <div className="active-line"></div>
        </Col>
      </Row>
      {/* style={{ border: "1px solid black" }} */}
      <Row>
        {product.map(item => (
        <Col lg={4} md={4} sm={12} key={item.id} onClick={() => goDetailProduct(item.id)}>
          <Card className="shadow p-3 mb-3 mx-auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Text className="price">Rp{item.price}</Card.Text>
              <div className="product-star">
                <div className="star"><FontAwesomeIcon icon={faStar} /></div>
                <div className="star"><FontAwesomeIcon icon={faStar} /></div>
                <div className="star"><FontAwesomeIcon icon={faStar} /></div>
                <div className="star"><FontAwesomeIcon icon={faStar} /></div>
                <div className="star"><FontAwesomeIcon icon={faStar} /></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default Product

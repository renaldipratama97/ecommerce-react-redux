import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './CartComponent.css'

function CartComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8} style={{ border: '1px solid black' }}>
            
          </Col>
          <Col lg={4} style={{ border: '1px solid black' }}>
            <div className='d-flex flex-column total-box'>
              <span style={{ fontWeight: 'bold' }}>Ringkasan Belanja</span>
              <br></br>
              <div className="black-line"></div>
              <br></br>
              <div className='d-flex justify-content-between mb-3'>
                <span>Total Harga</span>
                <span style={{ fontWeight: 'bold' }}>Rp 150.000</span>
              </div>
              <button className='btn button-beli'>Beli (3)</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartComponent

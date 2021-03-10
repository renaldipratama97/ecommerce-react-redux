import React from 'react'
import './Header.css';
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faBell, faEnvelope, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import picture from '../../assets/img/picture.jpg'

function header() {
  return (
    <div className="container-fluid">
      <div className="box">
        <div className="title">E-COMMERCE</div>

        <div className="input-box">
          <div className="category">
            Category
          </div>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <div className="icon-box">
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <div className="toko-box">
          <FontAwesomeIcon icon={faWarehouse} />
          <div className="toko-name">
            Toko
          </div>
        </div>

        <div className="profile-box">
          <div className="image">
            <img src={picture} alt="profileimage" />
          </div>
          <div className="profile-name">Muhammad</div>
        </div>

      </div>
    </div>
  )
}

export default header

import React from 'react'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './Cart.css'
import { Link } from 'react-router-dom';
import { CartOverview } from './CartOverview'


export const Cart = () => (
<Container className = 'container'>

  
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/ShopPreview">Shop</a></li>
  <li class="breadcrumb-item active">Cart</li>
</ol>

	<h2>
		Your Cart
	</h2>
  <div class="container">
  <div class="row">
  <div class="col-9">
  <table class="table">
 
  <thead>
  <tr>
      <th scope="col">Product</th>
      <th scope="col">Color</th>
      <th scope="col">Size</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>

    </tr>

    </thead>
<tbody>

    <tr>
      <th scope="row">Hippo</th>
      <td>Blue</td>
      <td>M</td>
      <td>
      
    <div class="input-group-btn">
        <input id="quantity" type="number" class="col-sm-5" />
    </div> 
</td>
      <td>9.95</td>
      <td>1</td>
    </tr>
    
  </tbody>
</table>
</div>




<div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<Link to="/CustomerInfo">
  <button className="add-to-cart btn btn-default" type="button">Proceed to Order</button>
  </Link>
  
		
</div>
</div>
</div>
</div>

</Container>
)

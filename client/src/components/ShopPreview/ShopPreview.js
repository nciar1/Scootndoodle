import React from 'react'
import Footer from '../../components/Footer/Footer'
import productPhotos from './DSC_0056.JPG'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './ShopPreview.css'
import { Link } from 'react-router-dom';
import { CartOverview } from '../Cart/CartOverview'



export const ShopPreview = () => (


<Container className = 'container'>

<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item active">Shop</li>
</ol>


    <h>
        Scoot n Doodle Shop
    </h>
    <hr/>

	<div class="row">
  <div class="col-9">
    <div className="shop-container">
		<div className="card">
				<div className="wrapper row">
					<div className="col-md-6">
						  <img src={productPhotos} />
					</div>
					<div className="col-md-6">
						<h3 className="product-title">Hippo</h3>
						<p className="product-description">Description of Product</p>
						<b>current price: $9.95</b>
					
                        <div className="action"> size:
							<button className="size-button" type="button">M</button>
                            <button className="size-button" type="button">L</button>
						</div>

                        <div className="action">colors: 
                        <button className="blue-button" type="radio"></button>
                        <button className="green-button" type="button"></button>
						</div>

						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
						
						</div>
					</div>
				</div>
			</div>
		</div>

        <div className="shop-container">
		<div className="card">
				<div className="wrapper row">
					<div className="col-md-6">
                    <img src={productPhotos} />					
                    </div>
					<div className="col-md-6">
						<h3 className="product-title">Car</h3>
						<p className="product-description">Description of Product</p>
						<b>current price: $9.95</b>
					
                        <div className="action"> size:
							<button className="size-button" type="button">M</button>
                            <button className="size-button" type="button">L</button>
						</div>

                        <div className="action">colors: 
                        <button className="blue-button" type="button"></button>
                        <button className="green-button" type="button"></button>
						</div>

						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
						
						</div>
					</div>
				</div>
			</div>

			

          
		</div>
		

		</div>

		
		<div class="col-md-3">
			<CartOverview/>
			<div class="text-center">
			<Link to="/Cart">
  <button className="add-to-cart btn btn-default" type="button">Proceed to Cart</button>
  </Link>
		
</div>
			
		</div>
		
		</div>
		


	
		

 </Container>  
 



)



//https://codepen.io/cody123anderson/pen/WwZjoE
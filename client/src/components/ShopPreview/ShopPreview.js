import React from 'react'
import Footer from '../../components/Footer/Footer'
import productPhotos from './DSC_0056.JPG'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import $ from 'jquery'
import './ShopPreview.css'


export const ShopPreview = () => (


<Container className = 'container'>
    <h>
        Scoot n Doodle Shop
    </h>
    <hr/>

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

    
        



 </Container>  



)



//https://codepen.io/cody123anderson/pen/WwZjoE
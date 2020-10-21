import React , {Fragment} from 'react';
import {connect} from 'react-redux';
import {productQuantity, clearProduct} from '../actions/productQuantity';


import smartHub from '../images/SmartHub.jpg';
import motionSensor from '../images/MotionSensor.jpg';
import wirelessCamera from '../images/WirelessCamera.jpg';
import smokeSensor from '../images/SmokeSensor.jpg';
import waterLeakSensor from '../images/WaterLeakSensor.jpg';


function Cart ({basketProps , productQuantity, clearProduct}){
	let productsInCart = [];

	Object.keys(basketProps.products).forEach(function(item){

		if(basketProps.products[item].inCart){
			productsInCart.push(basketProps.products[item])
		}

	});

	//const productImages = [smartHub,motionSensor,wirelessCamera,smokeSensor,waterLeakSensor]

	const productImages = (product)=> {
		if (product.tagName === 'smartHub') {
			return smartHub;
		} else if (product.tagName === 'motionSensor'){
			return motionSensor;
		}else if (product.tagName === 'wirelessCamera'){
			return wirelessCamera;
		}else if (product.tagName === 'smokeSensor'){
			return smokeSensor;
		}else if (product.tagName === 'waterLeakSensor'){
			return waterLeakSensor;
		}
	}

	productsInCart= productsInCart.map((product,index)=> {
		return(
			<Fragment key={index}>
			<div className="product"><ion-icon onClick={()=>clearProduct(product.tagName)}name="close-circle"></ion-icon><img src={productImages(product)}/>
				<span className="sm-hide">{product.name}</span>
			</div>
			<div className="price sm-hide">EUR{product.price}</div>
			<div className="quantity">
				<ion-icon onClick={()=> productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
					<span>{product.numbers}</span>
				<ion-icon onClick={()=> productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
			</div>
			<div className="total">EUR{product.numbers * product.price}</div>

			</Fragment>
			)
	});

	return(
		<div className="container-products">
			<div className="product-header">
				<h5 className="product-title">PRODUCT</h5>
				<h5 className="price sm-hide">PRICE</h5>
				<h5 className="quantity">QUANTITY</h5>
				<h5 className="total">TOTAL</h5>
			</div>
			<div className="products">
				{productsInCart}
			</div>
			<div className="baketTotalContainer">
				<h4 className="basketTotalTitle">Basket Total</h4>
				<h4 className="basketTotal">EUR {basketProps.cartCost}</h4>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	basketProps: state.basketState
});

export default connect (mapStateToProps, {productQuantity, clearProduct})(Cart); 
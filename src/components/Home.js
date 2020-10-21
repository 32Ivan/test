import React, {useState} from 'react';
import smartHub from '../images/SmartHub.jpg';
import motionSensor from '../images/MotionSensor.jpg';
import wirelessCamera from '../images/WirelessCamera.jpg';
import smokeSensor from '../images/SmokeSensor.jpg';
import waterLeakSensor from '../images/WaterLeakSensor.jpg';
import {connect} from 'react-redux';
import {addBasket} from '../actions/addAction';


const Home =(props)=> {
   console.log(props);
 	return(
   		<div className="container">
   			<div className="image">
   				<img src={smartHub} alt="Smart Hub"/>
   				<h5>Smart Hub</h5>
   				<h5>EUR 49.99</h5>
   				<a onClick={() => props.addBasket('smartHub')} className="addToCart cart1" href="#">Add to Cart</a>
   			</div>
   			<div className="image">
   				<img src={motionSensor} alt="Motion Sensor"/>
   				<h5>Motion Sensor</h5>
   				<h5>EUR 24.99</h5>
   				<a onClick={() => props.addBasket('motionSensor')}  className="addToCart cart2" href="#">Add to Cart</a>
   			</div>
   			<div className="image">
   				<img src={wirelessCamera} alt="wireless Camera"/>
   				<h5>Wireless Camera</h5>
   				<h5>EUR 99.99</h5>
   				<a onClick={() => props.addBasket('wirelessCamera')} className="addToCart cart3" href="#">Add to Cart</a>
   			</div>
   			<div className="image">
   				<img src={smokeSensor} alt="Smoke Sensor"/>
   				<h5>Smoke Sensor</h5>
   				<h5>EUR 19.99</h5>
   				<a onClick={() => props.addBasket('smokeSensor')}  className="addToCart cart4" href="#">Add to Cart</a>
   			</div>
   			<div className="image">
   				<img src={waterLeakSensor} alt="Water Leak Sensor"/>
   				<h5>Water Leak Sensor</h5>
   				<h5>EUR 14.99</h5>
   				<a onClick={() => props.addBasket('waterLeakSensor')} className="addToCart cart5" href="#">Add to Cart</a>
   			</div>
   		</div>
   	);
}

export default connect(null,{addBasket} )(Home);
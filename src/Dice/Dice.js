import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
	render() {
		return (
			<img 
				className={`Dice`}
				src={`${process.env.PUBLIC_URL}/img/dice_${this.props.value}.png`} 
				alt={this.props.value}
			/>
		);
	}
}

export default Dice;
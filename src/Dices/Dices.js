import React, { Component } from 'react';

import Dice from '../Dice/Dice';

import './Dices.css';

class Dices extends Component {
	render() {
		const nums = ["one","two","three","four","five","six"];
		return (
			<div className="Dices">
				{this.props.values.map((value, i) => 
					<Dice value={nums[value]} key={i} />
				)}
			</div>
		);
	}
}

export default Dices;

import React, { Component } from 'react';

import Button from '../Button/Button';

import './PopUp.css';

class PopUp extends Component {
	render() {
		return (
			<div className="PopUp">
				<span>{this.props.message}</span>
			</div>
		);
	}
}

export default PopUp;
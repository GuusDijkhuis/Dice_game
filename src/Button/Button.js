import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
	render() {
		let disabledClass = this.props.disabled ? 'Disabled' : '';
		console.log(this.props.disabled);

		return (
			<button 
				className={`Button ${disabledClass}`} 
				onClick={this.props.function}
				disabled={this.props.disabled}
			>
				{this.props.disabled ? this.props.disabledContent : this.props.content}
			</button>
			
		);
	}
}

export default Button;
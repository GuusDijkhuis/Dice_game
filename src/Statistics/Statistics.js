import React, { Component } from 'react';
import './Statistisc.css';

class Statistics extends Component {
	static defaultProps = {
		count: 0,
		score: 0,
		mex: 0
	}
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const container = document.querySelector('.Statistics');
		container.classList.toggle('open');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick} className="StatisticsTrigger">
					<img src="img/statistics.png" />
				</button>
				<div className="Statistics">
					<div>
						<h3>Count:</h3>
						<span className="Count">{this.props.count}</span>
					</div>
					<div>
						<h3>Score:</h3>
						<span className="Score">{this.props.score}</span>
					</div>
					<div>
						<h3>Mex:</h3>
						<span className="Mex">{this.props.mex}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Statistics;
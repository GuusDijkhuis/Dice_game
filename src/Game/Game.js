import React, { Component } from 'react';

import Dices from '../Dices/Dices';
import {randomNumber} from '../helpers/rand';

import './Game.css';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diceValues: [0,0],
			score: 0,
			count: 0,
			mex: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	score() {
		let newArr = this.state.diceValues.map(value => {return value + 1});
		let sortedArr = newArr.sort((a,b) => b-a);
		let score = parseInt(sortedArr.join(''));
		this.setState({
			score: score
		})
		this.mexCheck();
	}
	mexCheck() {
		if(this.state.score === 21) {
			this.setState({mex: true});
		}
	}
	rollDices = async () => {
		const valueArr = []
		let newCount = this.state.count + 1;

		for(let i = 0; i < 2; i++) {
			valueArr.push(randomNumber(6));
		}
		await this.setState({
			diceValues: valueArr,
			count: newCount,
			mex: false
		})
		await this.score();
	}
	handleClick() {
		this.rollDices();
	}
	render() {
		return (
			<div className="Game">
				<h3>Score {this.state.score}</h3>
				<Dices values={this.state.diceValues} />
				<button onClick={this.handleClick}>Roll</button>
				{ this.state.mex && <h1>Mex</h1> }
			</div>
		);
	}
}

export default Game;
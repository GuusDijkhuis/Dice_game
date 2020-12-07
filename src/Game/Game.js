import React, { Component } from 'react';

import logo from '../logo.svg';
import Dices from '../Dices/Dices';
import Statistics from '../Statistics/Statistics';
import PopUp from '../PopUp/PopUp';
import Button from '../Button/Button';
import {randomNumber} from '../helpers/rand';

import './Game.css';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diceValues: [0,0],
			score: 0,
			count: 0,
			mex: false,
			giveShot: false,
			mexCount: 0,
			button: {
				disabled: false
			}
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
		let nMex = this.state.mexCount;
		if(this.state.score === 21) {
			this.setState({
				mex: true, 
				mexCount: nMex + 1
			});
		}
		if(this.state.score === 31) {
			this.setState({
				giveShot: true
			});
		}
	}
	rollDices = async () => {
		const valueArr = []
		let newCount = this.state.count + 1;

		for(let i = 0; i < 2; i++) {
			valueArr.push(randomNumber(3));
		}
		await this.setState({
			diceValues: valueArr,
			count: newCount,
			mex: false,
			giveShot: false
		})
		await this.score();
	}
	handleClick(e) {
		e.preventDefault();
		this.rollDices();
		this.setState({
			button: {
				disabled: true
			}
		})
		setTimeout(() => {
			this.setState({
				button: {
					disabled: false
				}
			})
		}, 2000);
	}
	render() {
		return (
			<div className="Game">
				<img className="Logo" src={logo} />
				<Statistics 
					count={this.state.count}
					mex={this.state.mexCount}
					score={this.state.score}
				/>
				<Dices values={this.state.diceValues} />
				<h2>Your score: {this.state.score}</h2>
				<Button 
					function={this.handleClick} 
					content="Throw"
					disabled={this.state.button.disabled}
					disabledContent="Throwing..."
				/>
				{this.state.mex && <PopUp message="Mex"/>}
				{this.state.giveShot && <PopUp message="Give sip away!" />}
			</div>
		);
	}
}

export default Game;
import React, { Component } from 'react';
import Feed from './Feed';

const styles = {
	list: {
		position: 'relative',
		top: '75px',
		// textAlign: 'center',
	},
};

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
	}

	render() {
		return (
			<div style={styles.list}>
			{
				Object
				.keys(this.state.data)
				.map((item) => { return <Feed key={item} data={this.state.data[item]}/>})
			}
			</div>
		);
	}
}

export default CardList;

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Data from './helper/Data';
import FeedList from './components/FeedList';

const styles = {
	app: {
		position: 'fixed',
	},

	title: {
		textAlign: 'center',
		padding: '20px',
		fontSize: '30px',
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: Data,
		};
	}

	render() {
		return (
			<div>
				<AppBar style={styles.app}>
					<Typography variant="title" color="inherit" style={styles.title}>mybataz</Typography>
				</AppBar>
				<FeedList data={this.state.data}/>
			</div>
		);
	}
}

export default App;

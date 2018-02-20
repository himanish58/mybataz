import React, { Component } from 'react';
import Card, {
	CardHeader,
	CardContent,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const styles = {
	card: {
		width: '400px',
		margin: '20px',
		position: 'relative',
		left: '33%',
		right: '33%',
	},

	image: {
		height: '500px',
		width: '400px',
	},
};
const Feed = (props) => {

		return (
			<Card style={styles.card}>
				<CardHeader
            		avatar={
						<Avatar alt={props.data.first_name} src={props.data.profile_image}></Avatar>
            		}
					title={props.data.first_name}
            	/>
				<img
					style={styles.image}
					src={props.data.image}
					alt={props.data.brand}
				/>
				<CardContent>
				<h4>{props.data.brand}</h4>
				</CardContent>
			</Card>
		);
};

export default Feed;

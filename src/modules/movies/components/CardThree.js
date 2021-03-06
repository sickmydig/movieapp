/* eslint-disable new-cap */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { TMDB_IMG_URL } from '../../../constants/api';
import styles from './styles/CardThree';
import CountDownDate from '../CountDownDate';

const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;

class CardThree extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { info, viewMovie } = this.props;
		const upcoming = (Date.parse(new Date(info.release_date)) - Date.parse(new Date())) / 1000;
		return (
			<View style={styles.cardContainer}>
				<TouchableOpacity activeOpacity={0.9} onPress={viewMovie.bind(this, info.id)}>
					<View style={styles.card}>
						<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
						<LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.1)', 'rgba(0,0,0, 0.9)']} style={styles.linearGradient} />
						<View style={styles.cardDetailsContainer}>
							<View style={styles.cardStar}>
								<View style={styles.cardTitle}>
									<Text
										style={styles.cardTitleText}
										numberOfLines={1}>
										{info.original_title}
									</Text>
								</View>
								{iconStar}
								<View>
									<Text style={styles.cardStarRatings}>{info.vote_average.toFixed(1)}</Text>
								</View>
							</View>
							<View style={styles.cardDateLeft}>
								{upcoming > 0 ? <CountDownDate leftTime={upcoming} /> : <Text >{''}</Text> }
							</View>
							{/*<Text style={styles.cardRunningHours} />*/}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

CardThree.propTypes = {
	info: PropTypes.object.isRequired,
	viewMovie: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		moviesGenres: state.movies.genres
	};
}

export default connect(mapStateToProps, null)(CardThree);

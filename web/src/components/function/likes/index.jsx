import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_nav, search_user } from '../../../actions';

import axios from 'axios';

import default_user from '../../../resources/default_user.png';
import './index.css';

const Likes = (props) => {
	const dispatch = useDispatch();

	const _handleProfilePage = () => {
		axios.post('/search/select', {
			id: props.like.user_id
		})
		.then(res => {
			if(res.data !== null) {
				dispatch(search_user(res.data));
				dispatch(ui_nav(5));
			}
		});
	}

	return (
		<div className='likes-user' style={
			props.like.user_picture === null
			?
			{ backgroundImage: 'url(\'' + default_user + '\')' }
			:
			{ backgroundImage: 'url(\'/picture?p=' + props.like.user_picture + '\')' }
		} onClick={() => _handleProfilePage()}></div>
	);
}

export default Likes;


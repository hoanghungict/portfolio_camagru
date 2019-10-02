import React from 'react';
import { useDispatch } from 'react-redux';
import { content_id } from '../../../actions';

import { FiHeart, FiMoreVertical } from 'react-icons/fi';

import './index.css';

function Post(props) {
	const dispatch = useDispatch();

	return (
		<div className='post'>
			<div className='post-profile'></div>
			<div className='post-info-container'>
				<div className='post-author'>{props.data.user_id}</div>
				<div className='post-time'>3 HOURS AGO</div>
				<div className='post-in'>In</div>
				<div className='post-location'>{props.data.location}</div>
				<div className='post-with'>with</div>
				<div className='post-people'>{props.data.together}</div>
			</div>
			<div className='post-picture'></div>
			<div className='post-reflect-container'>
				<FiHeart className='post-icon' />
				<FiMoreVertical className='post-icon' />
				<div className='post-content'>
					{props.data.content}
				</div>
				<div className='post-likes' onClick={ () => dispatch(content_id(props.id)) }>10 likes</div>
				<div className='post-comments' onClick={ () => dispatch(content_id(props.id)) }>View all 6 comments</div>
				<div className='post-comment-box' contentEditable='true' data-placeholder='Add a comment...'></div>
				<div className='post-comment-post'>POST</div>
			</div>
		</div>
	);
}

export default Post;


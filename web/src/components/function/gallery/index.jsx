import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { camera_preview, camera_rotate, camera_filter } from '../../../actions';

import './index.css';

function Gallery() {
	const camera = useSelector(state => state.camera);
	const dispatch = useDispatch();

	let images = camera.images;
	let preview = camera.preview;

	function _handleChoose(i) {
		dispatch(camera_preview(images[i].data));
		dispatch(camera_rotate(images[i].rotate));
		dispatch(camera_filter(0));
	}

	return (
		<div className='camera-gallery'>
			{ images.length === 0 ? <p>There is no image yet! Take it!</p> : '' }
			{ images.map((image, i) => 
				<img className={ preview === images[i].data ? 'camera-gallery-image-active' : 'camera-gallery-image' + (images[i].rotate ? ' rotate' : '') } key={i} src={image.data}  onClick={ () => _handleChoose(i) } alt='Rendered' />
			)}
		</div>
	);
}

export default Gallery;

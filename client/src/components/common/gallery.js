import React, { useEffect, useState } from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = (props) => {
	const [photos, setPhotos] = useState([]);

	console.log(props);

	useEffect(() => {
		let photo_list = [];
		if (props.photos) {
			props.photos.forEach((p, i) => {
				photo_list.push({ original: p, thumbnail: p, loading: "lazy" });
			});
		}
		setPhotos(photo_list);
	}, [props.photos]);

	if (photos.length > 0) {
		return (
			<div className="container property-gallery-wrapper">
				<h3>Project Gallery</h3>

				<div id="gallery">
					<ImageGallery.default
						items={photos}
						lazyload={true}
						slideInterval={10000}
						autoPlay
					/>
				</div>
			</div>
		);
	} else return null;
};

export default Gallery;

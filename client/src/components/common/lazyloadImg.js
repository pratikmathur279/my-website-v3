import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImg = (props) => {
	return (
		<LazyLoadImage
			alt={props.alt ?? props.id}
			className={props.className}
			src={props.src}
			effect="blur"
			threshold={0}
		/>
	);
};

export default LazyLoadImg;

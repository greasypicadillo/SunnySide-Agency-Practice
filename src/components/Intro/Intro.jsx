import React, { useEffect } from "react";
import { Link as ArrowDown } from "react-scroll";
import src from "../../images/icon-arrow-down.svg";
import webp from '../../images/desktop/image-header.webp';
import jpg from '../../images/desktop/image-header.jpg';
import "./style.css";

const Intro = () => {

	return (
		<section
			className='intro-wrapper'
			style={{ backgroundImage: `url(${webp})` }}
			data-bg={jpg}
			data-bg-webp={webp}>

			<div className='intro-container'>
				<h1 className='intro-header'>We are creatives</h1>
				<ArrowDown
					className='arrow-down-btn'
					to='services'
					smooth={true}
					offset={-80}
					duration={500}
					isDynamic={true}>
					<img className='arrow-down' src={src} />
				</ArrowDown>
			</div>
		</section>
	);
};
export default Intro;

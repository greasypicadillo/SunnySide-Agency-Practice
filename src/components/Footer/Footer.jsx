import React from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import NavMenu from "../NavMenu/NavMenu";
import Facebook from "../Icons/Facebook";
import Instagram from './../Icons/Instagram';
import Twitter from './../Icons/Twitter';
import Pinterest from './../Icons/Pinterest';
import Logo from './../Icons/Logo';


const Footer = () => {
	return (
		<footer>
			<div className='footer-inner container'>
				<div className='footer-logo-wrap'>
					<a onClick={scroll.scrollToTop}>
						<Logo className='footer-logo' />
					</a>
				</div>
                <NavMenu className='footer-menu'/>
				<div className='socials'>
					<a href='#'>
						<Facebook/>
					</a>
					<a href='#'>
						<Instagram />
					</a>
					<a href='#'>
						<Twitter />
					</a>
					<a href='#'>
						<Pinterest />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

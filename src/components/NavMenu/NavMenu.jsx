import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const NavMenu = ({ className }) => {
	return (
		<ul className={`nav-links-wrap${className ? ' ' + className : ""}`}>
			<li className='nav-link-item'>
				<Link
					className='nav-link'
					smooth={true}
					spy={true}
					exact='true'
					offset={-80}
					duration={500}
					to='about'>
					About
				</Link>
			</li>
			<li className='nav-link-item'>
				<Link
					className='nav-link'
					smooth={true}
					spy={true}
					exact='true'
					offset={-80}
					duration={500}
					to='services'>
					Services
				</Link>
			</li>
			<li className='nav-link-item'>
				<Link
					className='nav-link'
					smooth={true}
					spy={true}
					exact='true'
					offset={-80}
					duration={500}
					to='projects'>
					Projects
				</Link>
			</li>
		</ul>
	);
};

export default NavMenu;

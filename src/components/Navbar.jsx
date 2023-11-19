// Navbar.jsx
import React from "react";

const Navbar = ({ scrollToHero, scrollToDose, scrollToVolume }) => {
	return (
		<nav className="bg-blue-700 text-white p-4 flex justify-between items-center sticky top-0 z-50">
			<div
				className="flex flex-row items-center justify-center text-center hover:text-blue-100"
				onClick={scrollToHero}
			>
				<img src="/dddc.png" alt="Your Logo" className="h-8 animate-spin" />
				<span className="ml-2 text-lg font-bold">Dyrane DDC</span>
			</div>
			<div className="flex space-x-4 font-bold">
				<button className="hover:text-blue-200 hover:border-b-2 border-blue-200" onClick={scrollToDose}>Dose</button>
				<button className="hover:text-blue-100 hover:border-b-2 border-blue-200" onClick={scrollToVolume}>Volume</button>
			</div>
		</nav>
	);
};

export default Navbar;
